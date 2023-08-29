import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import LiHeader from './LiHeader/LiHeader';
import LiMain from './LiMain/LiMain';
import LiFooter from './LiFooter/LiFooter';
import { selectedCategory } from '../../store/menuStore';
import { useRecoilState } from 'recoil';

function FeedMainContainer(props) {
    const [ feedListArray, setFeedListArray ] = useState([
        {
            id: 1,
            category: "카페",
            header: {
                userImg: "https://m.place.naver.com/my/_next/static/image/_/assets/images/icon_profile_default.cf1f777d594520630ff249eb31ab38c2.png",
                username: "정모긔",
                reviewCount: 3,
                follower: 0
            },
            main: {
                img1: "https://pup-review-phinf.pstatic.net/MjAyMzA4MjhfMTU5/MDAxNjkzMjA3NzI3MjMw.-V5r6HSz5IYTKpQruf0kF3rvUtACoP3VZeSK8UG2he4g.5_4r3Hoas4qJrchXw8WYYf3phfJZnNnHMgRazq48zRYg.JPEG/20230828_160348.jpg?type=f828_828_70_sharpen",
                img2: "",
                img3: "",
                location: "서울시 동교동 최신",
                comment: "조선시대에 사람들이 커피를 즐겨 마셨다면 이런 모습이겠구나 라는 생각이 드는 카페",
                hashtagImg: "https://ssl.pstatic.net/static/pup/emoji/coffee20220119222225.png",
                hashtag: "커피가 맛있어요",
                hashtagCount: 3
            },
            footer: {
                date: "8.28 월",
                placeName: "율곡 커피로스터스",
                placeCategory: "카페, 디저트",
                placeLocation: "서울특별시 마포구 동교동"
            }
        },
        {
            id: 2,
            category: "카페",
            header: {
                userImg: "https://m.place.naver.com/my/_next/static/image/_/assets/images/icon_profile_default.cf1f777d594520630ff249eb31ab38c2.png",
                username: "안녕하시아요",
                reviewCount: 0,
                follower: 0
            },
            main: {
                img1: "https://pup-review-phinf.pstatic.net/MjAyMzA4MjlfMjk2/MDAxNjkzMjgwNzQ3NDQx.sT5W5InUlbi1UiTBtreAx09bbzhlQzeDvLaScgJ9azMg.TN_lw8m5Pp8GFL10A74-_8Jop0s4j2RVp9RnzcWndEEg.JPEG/6100E627-D7B1-47E0-B44C-1A2C38E388B5.jpeg?type=f828_828_70_sharpen",
                img2: "",
                img3: "",
                location: "부산시 광안동 최신",
                comment: "맛있어요~!!!!!!!!! 특히 프렌치 토스트 겉바속촉 식감대박 ㅎㅎ",
                hashtagImg: "https://ssl.pstatic.net/static/pup/emoji/face_savoring_food20220119222022.png",
                hashtag: "음식이 맛있어요",
                hashtagCount: 1
            },
            footer: {
                date: "8.29 화",
                placeName: "유어타입",
                placeCategory: "브런치",
                placeLocation: "부산광역시 수영구 광안동"
            }
        },
        {
            id: 3,
            category: "한식",
            header: {
                userImg: "https://myplace-phinf.pstatic.net/20230828_276/1693208317051ppDjU_PNG/1010958F-0168-4CEF-B767-DD5BDA30E0BF.png",
                username: "이지님",
                reviewCount: 22,
                follower: 7
            },
            main: {
                img1: "https://pup-review-phinf.pstatic.net/MjAyMzA4MjlfNDAg/MDAxNjkzMjkxMDI4MDEw.a7ACNzmpqWOjUUdJHwAwH-idhBrgDhc1iKaPJ2G0PZ0g.yHiOmia3fzt5d5BZ9Mq8KU6Z99NrVMx1HlZljVu010cg.JPEG/1693290782718.jpg?type=f828_828_70_sharpen",
                img2: "",
                img3: "",
                location: "서귀포시 성산읍 최신",
                comment: "제주도를 자주가는편인데 이번에는 코스를 성산읍으로 잡았어요. 흑돼지가 먹고싶어서 검색해서 갔는데 고기가 쫄깃쫄깃 엄청 맛있었어요~후식으로 찌개도 먹었는데 찌개도 맛있드라구요 재방문의사 있습니다! 굿",
                hashtagImg: "https://ssl.pstatic.net/static/pup/emoji/face_savoring_food20220119222022.png",
                hashtag: "음식이 맛있어요",
                hashtagCount: 4
            },
            footer: {
                date: "8.28 월",
                placeName: "금돗 성산흑돼지",
                placeCategory: "돼지고기구이",
                placeLocation: "제주특별자치도 서귀포시 성산읍"
            }
        },
        {
            id: 4,
            category: "클래스・소품",
            header: {
                userImg: "https://m.place.naver.com/my/_next/static/image/_/assets/images/icon_profile_default.cf1f777d594520630ff249eb31ab38c2.png",
                username: "예나6557",
                reviewCount: 1,
                follower: 0
            },
            main: {
                img1: "https://pup-review-phinf.pstatic.net/MjAyMzA4MjlfMjk3/MDAxNjkzMzEwNzMzMzk3.k-pXdJ6LlyWViKfrCVr09JF6db08w_qHSORdflXfuOog.QAhv1rZ43cZ4tPFmxn5-w7mbKuGlKA-qruYbsYMOrXsg.JPEG/13586260-9FA1-4D2F-8CB1-FDC89C425775.jpeg?type=f442_442_70_sharpen",
                img2: "https://pup-review-phinf.pstatic.net/MjAyMzA4MjlfMjYz/MDAxNjkzMzEwNzMzOTcw.iNJAU1FiRbveDvG9UbJgyNvUQ46z0ACYQguffzbqgWYg.RBAg05cU4Hs9ZJWm4NqKt5_wq2Yp3xhqkyK7NPquvYkg.JPEG/61AAF3C5-E8F5-4D8C-A6DC-0D544E94F6C4.jpeg?type=m385_385_70_sharpen",
                img3: "https://pup-review-phinf.pstatic.net/MjAyMzA4MjlfMjE4/MDAxNjkzMzEwNzMzNjk1.s8llY3OQ80StOKsPWTkwqrHOmnca8GDAWt3KzmPmfD8g.mwkA1veRdb8nkbbC1EKBpV4o-bkhbFk749h5jwvacfwg.JPEG/3F391EF6-2BC9-45F8-9EA9-97BB709BF480.jpeg?type=m385_385_70_sharpen",
                location: "제주시 조천읍 최신",
                comment: "소품샵에 비슷비슷한것만 팔아서 아쉽거나 아기자기한거 관심 없는 분들께 추천합니다 엽서 폰케이스 에어팟케이스 러그 다 너무 예뻐서 홀린듯이 돈쓰게 되는 곳 매장도 예쁘고 옆에 카페도 있어서 좋아요",
                hashtagImg: "https://ssl.pstatic.net/static/pup/emoji/wrapped_gift20220119222229.png",
                hashtag: "선물하기 좋아요",
                hashtagCount: 4
            },
            footer: {
                date: "8.29 화",
                placeName: "943스튜디오",
                placeCategory: "인테리어소품",
                placeLocation: "제주특별자치도 제주시 조천읍"
            }
        },
        {
            id: 5,
            category: "클래스・소품",
            header: {
                userImg: "https://phinf.pstatic.net/contact/20220224_298/1645699510771ioUdg_PNG/profileImage.png",
                username: "wjddls361",
                reviewCount: 22,
                follower: 0
            },
            main: {
                img1: "https://pup-review-phinf.pstatic.net/MjAyMzA4MjlfMTg2/MDAxNjkzMzA4ODI5NzAz.xa5YuVTPrjprUE0lfOkMh5qEtoTrdbp15HkiWY8U_3cg.rgZPavy1Gcs5M0DOEksZf3D6QDZneySyNicH1yueOfwg.JPEG/8BFDBD41-5038-4A86-8779-53B8B5FB3CF8.jpeg?type=m385_385_70_sharpen",
                img2: "https://pup-review-phinf.pstatic.net/MjAyMzA4MjlfMjk1/MDAxNjkzMzA4ODI5OTAy.S8BZf-j-Yx5sJx3HX1yLzfopzWqWPwkXxnj7m10BHC0g.lBHbV7-82nZzUE6ZvGX7F4rfkyHHLVAFYZRSOzYqXbMg.JPEG/71B8B0DC-5C0B-4C3A-A9C2-191F3C56E4B2.jpeg?type=m385_385_70_sharpen",
                img3: "",
                location: "서울시 서교동 최신",
                comment: "처음 반지 만들어보는데 너무 재미있고 뜻깊네요!! 잘 가르쳐주셔서 감사합니다 ~~~~^^✨",
                hashtagImg: "https://ssl.pstatic.net/static/pup/emoji/stopwatch20220119222225.png",
                hashtag: "수업 시간이 충분해요",
                hashtagCount: 3
            },
            footer: {
                date: "8.29 화",
                placeName: "홍대반지카페",
                placeCategory: "반지공방",
                placeLocation: "서울특별시 마포구 서교동"
            }
        }
    ])

    const [ isSelectedCategory, setIsSelectedCategory ] = useRecoilState(selectedCategory);

    return (
        <ul css={S.SLayout}>
            {feedListArray.filter(item => (item.category === isSelectedCategory.item || isSelectedCategory === "all")).map(item => (
                <li css={S.SListBox} key={item.id}>
                <LiHeader header={item.header} itemId={item.id}/>
                <LiMain main={item.main}/>
                <LiFooter footer={item.footer}/>
            </li>
            ))}
        </ul>
    );
}

export default FeedMainContainer;