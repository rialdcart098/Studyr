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
questions = [
    {
        "question": "Based on these results, it was determined that approximately 75\\% of teens use social media at least once per day. What is the best explanation of the difference in the results between the two surveys?",
        "choices": {
            "1": "The smaller sample size of five teens resulted in a smaller margin of error and should provide a more accurate estimate.",
            "2": "The smaller sample size of five teens resulted in a bigger margin of error and should provide a more accurate estimate.",
            "3": "The larger sample size of 50 teens resulted in a smaller margin of error and should provide a more accurate estimate.",
            "4": "The larger sample size of 50 teens resulted in a bigger margin of error and should provide a more accurate estimate."
        },
        "correct": 3,
        "image": "image_1"
    }
]
# PAGE 6
url = "http://localhost:6969/api/exams/692c8e0cf2179768d53de50f"
for question in questions:
    print(question)
    response = requests.put(url, json={"question": question})