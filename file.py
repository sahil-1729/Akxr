import os

from celery import Celery

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ai_reel.settings")
app = Celerimport json
import math
import os
import re

from dotenv import load_dotenv
from openai import OpenAI

from .models import ScenePrompt


def create_scene_prompts(reel_requested):
    load_dotenv(os.path.join(os.path.dirname(__file__), "..", ".env"))
    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

    number_of_scenes = math.ceil(reel_requested.duration / 8)

    image_safe = reel_requested.image.image.url if reel_requested.image else ""
    avatar_safe_description = (
        reel_requested.avatar.description if reel_requested.avatar else ""
    )
    description_safe = reel_requested.description if reel_requested.description else ""
    avatar_image_safe = reel_requested.avatar.image if reel_requested.avatar else ""

    prompt = f"""
You are an expert video scene prompt writer for AI video generation systems genre being educational videos
Your job is to create structured multi-scene prompts with *perfect avatar consistency* *easily understandable videos*
and *Enhance focus of user*

[INPUT DATA]
Product Image: {image_safe}
Avatar Image:{avatar_image_safe}
Avatar Description: {avatar_safe_description}
Product Description: {description_safe}
Total Video Duration: {reel_requested.duration} seconds
Number of Scenes: {number_of_scenes}

[GLOBAL CONSISTENCY RULES — UNBREAKABLE]
1. First, extract:
   **STABLE_AVATAR**: A single avatar description from {avatar_safe_description} and use image {avatar_image_safe} as *STABLE_AVATAR*
      - Include every detail exactly.
      - DO NOT change skin tone, face shape, age, hairstyle, body type or any identity feature.
      - Include {avatar_image_safe} as STABLE_AVATAR
      - Clothing may change to match the scene, but all other features must remain identical.

   **STABLE_PRODUCT**: A STABLE_PRODUCT image derived from {image_safe} and product description derived from {description_safe}
      - The product must NEVER change in any scene.
      - The {description_safe} should form basis of storyline

2. For ALL scenes:
   - Make the explanation extremely simple and crisp so even a novice understands.
   - Keep the viewer completely focused using engaging pacing, clean visuals, and smooth scene transitions.
   - You MUST embed STABLE_AVATAR and STABLE_PRODUCT *inside the final prompt text of every scene verbatim*.
   - You must not paraphrase, rewrite or shorten these blocks.
   - They must appear inside the prompt in their full form.
   - Use slow, clear narration pacing suitable for beginners.
   - Use very short sentences.
   - Use dynamic but subtle camera motion to maintain attention.
   - Add clean text labels for keywords.
   - Keep visuals simple and uncluttered.
   - Ensure the avatar keeps natural eye-contact and steady facial expression.


3. Scene Requirements:
   - sequence starts at 1
   - duration per scene = 1–8 seconds
   - Total duration = {reel_requested.duration} seconds
   - Each scene MUST contain the following inside the "prompt" field:

        A. STABLE_AVATAR block (verbatim)
        B. STABLE_PRODUCT block (verbatim)
        C. Scene-specific action
        D. Storyline continuity
        E. Consistent lighting, color palette, cinematic tone
        F. A transition cue for the next scene
        H. Voiceover line (explaining the product benefit)

4. Tone:
Warm, friendly, beginner-friendly, patient.

5. Style Consistency:
   - Same lighting temperature
   - Same cinematic mood
   - Same color palette
   - Same aspect ratio
   - No abrupt scene resets

[OUTPUT FORMAT — STRICT]
Return ONLY a JSON array like this:

[
  {{
    "sequence": 1,

    "prompt": "FULL scene prompt that includes STABLE_AVATAR and STABLE_PRODUCT embedded inside"
  }}
]

Every scene’s "prompt" field MUST embed the full STABLE_AVATAR and STABLE_PRODUCT text inside it.
Do NOT output STABLE blocks separately. Embed them inside every scene.
"""
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        temperature=1.1,
    )

    raw_scenes = response.choices[0].message.content

    parsed_scenes = []
    parsed_scenes = extract_json(raw_scenes)
    save_scene_prompts(parsed_scenes, reel_requested)
    return parsed_scenes


def extract_json(text):
    match = re.search(r"\[\s*{.*?}\s*\]", text, re.DOTALL)
    if not match:
        return None
    try:
        return json.loads(match.group(0))
    except Exception:
        return None


def save_scene_prompts(parsed_scenes, reel_requested):
    if not parsed_scenes:
        raise ValueError("No scenes to save. Parsed scenes list is empty.")

    for scene in parsed_scenes:
        if "sequence" not in scene or "prompt" not in scene:
            raise ValueError(f"Invalid scene structure: {scene}")
    for scene in parsed_scenes:
        ScenePrompt.objects.create(
            reel_request=reel_requested,
            sequence=scene["sequence"],
            prompt=scene["prompt"],
        )
    return True
y("ai_reel")
app.config_from_object("django.conf:settings", namespace="CELERY")
app.autodiscover_tasks(["reels"])


@app.task(bind=True)
def debug_task(self):
    print(f"Request: {self.request!r}")
