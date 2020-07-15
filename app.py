"""
This is a simple gui that gets your specs.
I figured out a way too use classes with eel but it has its flaws,
It makes it a little slower but for my application it doesn't really affect it.
"""

import eel
import cpuinfo
import psutil

import utils # pylint: disable=import-error

eel.init('web')



class cpu:

    def __init__(self):
        self.info = cpuinfo.get_cpu_info()

    def Brand(self):
        return self.info["brand_raw"].replace("(R)", "®")

    def Cores(self):
        return psutil.cpu_count(logical=False)

    def Threads(self):
        return psutil.cpu_count()

    def Frequency(self):
        return self.info["hz_actual_friendly"]

class ram:

    def Size(self):
        return round(psutil.virtual_memory().total / 1000000000, 2)



# Init all the classes
Cpu = cpu()
Ram = ram()

@eel.expose
def cpuClass(method):
    i = {
        "brand": Cpu.Brand,
        "cores": Cpu.Cores,
        "threads": Cpu.Threads,
        "frequency": Cpu.Frequency,
    }
    return i[method]()

@eel.expose
def ramClass(method):
    i = {
        "size": Ram.Size
    }

    return i[method]()

def run():
    try:
        chrome_available = utils.can_use_chrome()
        if chrome_available:
            eel.start('main.html', size=(650, 650), port=0)
        else:
            eel.start('index.html', size=(650, 650), port=0, mode='user default')
    except Exception as e:
        raise e

    while True:
        eel.sleep(10)

if __name__ == '__main__':
    run()