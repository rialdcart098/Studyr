# import pymupdf
# import os
#
# doc = pymupdf.open("../questionbank/ALGEBRA_2.pdf")
# path = '../../questions/algebra_2'
# os.makedirs(path, exist_ok=True)
#
# for page in doc:
#     text = page.get_text()
#     print(text)
#     images = page.get_images()
#     for img in images:
#         xref = img[0]
#         base_image = doc.extract_image(xref)
#         image_bytes = base_image["image"]
#         image_ext = base_image["ext"]
#         imgPath = os.path.join(path, f"image_{xref}.{image_ext}")
#         with open(imgPath, "wb") as img_file:
#             img_file.write(image_bytes)
#
import requests
# import pymupdf.layout
# import pymupdf4llm

# import os
# os.environ["TESSDATA_PREFIX"] = "C:/Program Files/Tesseract-OCR/tessdata"
# doc = pymupdf.open("../questionbank/ALGEBRA_2.pdf")
# json = pymupdf4llm.to_markdown(doc)
# with open('algebra2.txt', 'w') as f:
#     f.write(json)
#
questions = [
      {
        "question": "The graph of which function has a period of 3?",
        "choices": {
          "1": "y = -7 \\sin\\left(\\frac{2\\pi}{3}x\\right) - 5",
          "2": "y = -7 \\sin\\left(\\frac{3\\pi}{2}x\\right) + 9",
          "3": "y = -7 \\sin(3x) - 5",
          "4": "y = 3 \\sin(\\pi x) + 9"
        },
        "correct": 1,
        "image": None
      },
      {
        "question": "Given \\( q(x) = 2 \\log(x) \\) and \\( r(x) = (x - 2)^3 - 4 \\), what is a solution of \\( q(x) = r(x) \\) to the nearest tenth?",
        "choices": {
          "1": "1.1",
          "2": "3.7",
          "3": "3.9",
          "4": "4.3"
        },
        "correct": 3,
        "image": None
      },
      {
        "question": "For all values for which the expressions are defined, which expression cannot be rewritten as \\( (x - 6)(x + 2) \\)?",
        "choices": {
          "1": "(x + 2)(x^2 - 2x - 24) \\div (x + 4)",
          "2": "x(x + 2)(x - 6) \\div (x + 4)",
          "3": "(x - 2)^2 - 4x - 12 \\div (x - 6)",
          "4": "(x + 4)(x - 2) - 2(3x + 2)"
        },
        "correct": 3,
        "image": None
      },
      {
        "_id": "693c4241d8d28a214ee99fa8",
        "question": "Jin solved the equation \\( \\sqrt{4 - x} = 8 \\) by squaring both sides. What extraneous solution did he find?",
        "choices": {
          "1": "-5",
          "2": "12",
          "3": "4",
          "4": "3"
        },
        "correct": 2,
        "image": None
      },
      {
        "question": "Given \\( x \u003E 0 \\), the expression \\( \\left(\\frac{1}{x^2}\\right)^{-\\frac{3}{4}} \\) is equivalent to",
        "choices": {
          "1": "x \\div \\sqrt{x}",
          "2": "x^{3/2}",
          "3": "x^{3/4}",
          "4": "\\frac{1}{x^{3/2}}"
        },
        "correct": 2,
        "image": None
      }
]
# PAGE 6
url = "http://localhost:6969/api/exams/693c4356d8d28a214ee99fd7" #/692c8e0cf2179768d53de50f"
for question in questions:
    print(question)
    response = requests.put(url, json={"question": question})