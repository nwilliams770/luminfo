FROM python:3.8-alpine
COPY requirements.txt .
RUN pip install -r requirements.txt
CMD python3 mock.py
COPY . /app
WORKDIR /app