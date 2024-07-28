# Main Source Page

## Init. Setting

![img](./init.gif)

1. Node.JS 설치
    - 설치완료 후 CMD에 npm 입력시 영상처럼 설명 출력
2. Git 설치
    - 설치완료 후 CMD에 git 입력시 영상처럼 설명 출력 됨
3. git clone
    - 원하는 작업 위치에 폴더를 만들고 해당 위치에서 `git clone [리포지토리 주소]`
    - 또는 원하는 작업 위치에 폴더를 만들고 zip으로 다운받아서 압축 풀기
4. CMD 창에서 my-website 폴더로 이동
    - 폴더 이동 명령어는 `cd [폴더 명]]`
    - 상위 폴더로 이동하는 명령어는 `cd ..`
    - 현재 폴더 내의 모든 파일 목록을 보는 명령어는 (windows)`dir`, (mac)`ls`
5. npm install
    - my-website 폴더 내에서 해야 함에 주의!
6. npm run start
    - my-website 폴더 내에서 해야 함에 주의!

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