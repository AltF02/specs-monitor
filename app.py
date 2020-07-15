"""
This is a simple gui that gets your specs.
I wanted to use classes but that is impossible with eel
"""

import eel
import cpuinfo
import psutil

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

eel.start('main.html', port=2132)
while True:
    eel.sleep(10)