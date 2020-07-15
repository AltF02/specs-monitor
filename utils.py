from eel import chrome
import os

def can_use_chrome():
    # Checks if chrome is installed
    chrome_instance_path = chrome.find_path()
    return chrome_instance_path is not None and os.path.exists(chrome_instance_path)

