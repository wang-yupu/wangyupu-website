import pyautogui
import time

print("请把引擎放在物品栏1号格，保证物品栏2号格是空的，且没有修改1、2切换物品栏的热键。")
print("把鼠标移到屏幕任意一个角落即可停止。")
input("按回车键继续...")
time.sleep(5)
print("开始")

pyautogui.PAUSE = 0

while True:
    pyautogui.press("1")
    pyautogui.click()
    pyautogui.press("2")
    for index in range(5): pyautogui.press("Q")
    time.sleep(0.025)