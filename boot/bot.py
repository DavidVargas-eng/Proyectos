from selenium import webdriver


driver = webdriver.Chrome("C:/proyectos/boot/recursos/chromedriver.exe")
driver.get("https://web.whatsapp.com/")

msg = str(input("INSERTAR EL MENSAJE: "))
count = int(input("INSERTAR NUMERO DE ENVIOS: "))

msg_box = driver.find_element_by_xpath("/html/body/div/div/div/div[4]/div/footer/div[1]/div[2]/div/div[2]")

for i in range(count):
    msg_box.send_keys(msg)
    btn = driver.find_element_by_xpath("/html/body/div/div/div/div[4]/div/footer/div[1]/div[3]/button")
    btn.click()