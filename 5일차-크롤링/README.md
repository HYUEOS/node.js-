# 5일차 - 크롤링
NodeJS 로 알아보는 서버 스터디 5일차입니다.

크롤링의 원리와 구현에 대해 진행합니다.

## 목차
1.  크롤링의 의미
2.  크롤링 하는 방법

## 1. 크롤링의 의미
웹페이지(HTML문서)에서 유용한 정보를 정리하여 뽑아내는 것. (웹페이지 데이터 긁어오기)

## 2. 크롤링 하는 방법
1.  Scraping - 데이터를 어떻게 잘 가져올 것인가?
    -   Authentication - 인증된 사용자만 정보를 볼 수 있는 구조면 정보를 어떻게 가져올 것인가?
    -   Pagination - 여러 페이지에 걸쳐서 데이터가 나눠져있다면 어떻게 이를 쉽게 가져올 것인가?

2.  Parsing - 데이터를 어떻게 잘 추출할 것인가?

Node.js 에서는

__Scarping 으로 일반적으로 request 를 사용하고,__

__Parsing 으론 일반적으로 cheerio 를 사용한다.__
