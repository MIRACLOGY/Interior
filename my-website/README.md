# Main Source Page

## Init. Setting

1. Node.JS 설치
2. Git 설치
3. git clone
4. CMD 창에서 my-website 폴더로 이동
5. npm install
6. npm run start

### `npm start`

로컬 테스트 용 명령어   
my-website 폴더 내에 있어야 함.

## Update

1. `./my-website/src/components/imgs/` 폴더에 추가할 프로젝트 이미지 폴더 추가
    - .jpg 파일로 통일하기
    - 원하는 순서대로 1번부터 이름 번호 설정
2. `./my-website/src/components/imgs/imgs.json` 파일에 추가한 프로젝트 정보 추가
    ```
        {
            "id": 19,
            "name": "추가할 폴더명",
            "imageCount": 9
        }
    ```
    - 형식 맞춰서 id, name, imageCount 채워주기
    - id는 앞 번호 이어서 작성
    - name은 폴더명과 동일하게(띄어쓰기 주의)
    - imageCount는 총 이미지 갯수
    - 콤마(,) 주의하기
3. 다음 명령어 실행하기
    - GIT 로그인 되어 있어야 함.
    ```
    git add
    git commit -m "project update"
    git push
    ```
4. 폴더를 my-website로 이동해서 다음 명령어 실행하기
    ```
    npm run deploy
    ```