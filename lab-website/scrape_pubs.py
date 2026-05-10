import urllib.request
import re

url = "https://faculty.eng.ufl.edu/piyush-jain/research/publications/"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
html = urllib.request.urlopen(req).read().decode("utf-8")

items = re.findall(r"<li.*?>(.*?)</li>", html, re.DOTALL)
count = 0
for item in items:
    text = re.sub(r"<[^>]+>", "", item).strip()
    text = re.sub(r"\s+", " ", text)
    if len(text) > 50:
        print(f"{count+1}. {text}")
        count += 1
