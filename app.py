"""
This is a simple gui that gets your specs.
I wanted to use classes but that is impossible with eel
"""

import eel
import cpuinfo
import psutil

import utils

eel.init('web')

info = cpuinfo.get_cpu_info()

# All this just basically gets cpu info
@eel.expose
def getCpuBrand():
    return info["brand_raw"].replace("(R)", "®")

@eel.expose
def getCpuCores():
    return psutil.cpu_count(logical=False)

@eel.expose
def getCpuThreads():
    return psutil.cpu_count()

@eel.expose
def getCpuFrequency():
    return info["hz_actual_friendly"]

def run():
    try:
        chrome_available = utils.can_use_chrome()
        if chrome_available:
            eel.start('main.html', size=(650, 650), port=0)
        else:
            eel.start('index.html', size=(650, 650), port=0, mode='user default')
    except Exception as e:
        raise e
        return

    while True:
        eel.sleep(10)

if __name__ == '__main__':
    run()