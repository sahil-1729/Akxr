import os
import time
import shutil
import logging
import random
import string
from datetime import datetime, timedelta
import threading

# ==============================
# CONFIGURATION SECTION
# ==============================

WATCH_FOLDER = "watch_folder"
ARCHIVE_FOLDER = "archive_folder"
LOG_FILE = "automation.log"
REPORT_FILE = "daily_report.txt"
FILE_EXPIRY_MINUTES = 1  # archive files older than this

# ==============================
# SETUP
# ==============================

if not os.path.exists(WATCH_FOLDER):
    os.makedirs(WATCH_FOLDER)

if not os.path.exists(ARCHIVE_FOLDER):
    os.makedirs(ARCHIVE_FOLDER)

logging.basicConfig(
    filename=LOG_FILE,
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s"
)

print("Automation system started...")
logging.info("Automation system initialized.")

# ==============================
# HELPER FUNCTIONS
# ==============================

def generate_random_string(length=8):
    return ''.join(random.choices(string.ascii_letters + string.digits, k=length))


def simulate_notification(message):
    """Simulates sending a notification."""
    print(f"[NOTIFICATION] {message}")
    logging.info(f"Notification sent: {message}")


def rename_file(filepath):
    """Renames file with timestamp."""
    try:
        directory, filename = os.path.split(filepath)
        name, ext = os.path.splitext(filename)
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        new_name = f"{name}_{timestamp}{ext}"
        new_path = os.path.join(directory, new_name)
        os.rename(filepath, new_path)

        logging.info(f"File renamed: {filename} -> {new_name}")
        return new_path
    except Exception as e:
        logging.error(f"Rename failed: {e}")
        return filepath


def archive_old_files():
    """Moves old files to archive folder."""
    try:
        now = datetime.now()
        for file in os.listdir(WATCH_FOLDER):
            path = os.path.join(WATCH_FOLDER, file)
            if os.path.isfile(path):
                modified_time = datetime.fromtimestamp(os.path.getmtime(path))
                if now - modified_time > timedelta(minutes=FILE_EXPIRY_MINUTES):
                    shutil.move(path, os.path.join(ARCHIVE_FOLDER, file))
                    logging.info(f"Archived file: {file}")
                    simulate_notification(f"Archived file: {file}")
    except Exception as e:
        logging.error(f"Archive process failed: {e}")


def generate_report():
    """Generates a daily report."""
    try:
        with open(REPORT_FILE, "w") as report:
            report.write("=== AUTOMATION DAILY REPORT ===\n")
            report.write(f"Generated at: {datetime.now()}\n\n")
            report.write(f"Files in watch folder: {len(os.listdir(WATCH_FOLDER))}\n")
            report.write(f"Files in archive folder: {len(os.listdir(ARCHIVE_FOLDER))}\n")

        logging.info("Daily report generated.")
    except Exception as e:
        logging.error(f"Report generation failed: {e}")


# ==============================
# MAIN MONITOR LOOP
# ==============================

def monitor_folder():
    """Continuously monitors folder for new files."""
    already_seen = set()

    while True:
        try:
            current_files = set(os.listdir(WATCH_FOLDER))
            new_files = current_files - already_seen

            for file in new_files:
                path = os.path.join(WATCH_FOLDER, file)
                if os.path.isfile(path):
                    logging.info(f"New file detected: {file}")
                    simulate_notification(f"New file detected: {file}")
                    rename_file(path)

            already_seen = current_files
            archive_old_files()

            time.sleep(5)

        except Exception as e:
            logging.error(f"Monitoring error: {e}")
            time.sleep(5)


# ==============================
# RANDOM FILE GENERATOR
# ==============================

def random_file_generator():
    """Creates random files periodically to simulate activity."""
    while True:
        time.sleep(random.randint(10, 20))
        filename = f"file_{generate_random_string()}.txt"
        filepath = os.path.join(WATCH_FOLDER, filename)

        with open(filepath, "w") as f:
            f.write("Random content: " + generate_random_string(50))

        logging.info(f"Random file created: {filename}")


# ==============================
# SCHEDULER
# ==============================

def scheduler():
    """Runs scheduled tasks."""
    while True:
        time.sleep(60)
        generate_report()


# ==============================
# THREAD STARTUP
# ==============================

if __name__ == "__main__":
    monitor_thread = threading.Thread(target=monitor_folder)
    generator_thread = threading.Thread(target=random_file_generator)
    scheduler_thread = threading.Thread(target=scheduler)

    monitor_thread.daemon = True
    generator_thread.daemon = True
    scheduler_thread.daemon = True

    monitor_thread.start()
    generator_thread.start()
    scheduler_thread.start()

    while True:
        time.sleep(1)
