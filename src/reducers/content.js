import * as constants from "@/constants";
import {
  removeItemById,
  changeItemById,
  copyItemById,
  moveItemById,
  addItemAfterById,
  resizeItemsById
} from "./helpers";

const initialState = {
  content: [
    {
      type: "Grid",
      id: "GBLai8OjpRl9DPiVZJIcu",
      item: true,
      only: [],
      container: true,
      alignItems: "stretch",
      justifyContent: "flex-end",
      flexDirection: "row",
      xs: 12,
      section: true,
      content: [
        {
          type: "Grid",
          id: "UeeS2pAq3rJ_bxEEGs0XX",
          item: true,
          only: [],
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          xs: 10,
          content: [
            {
              type: "EditorPlugin",
              width: "100%",
              height: "auto",
              value:
                '<h1><span class="ql-size-large" style="color: rgb(255, 255, 255);">Бизнес-школа</span></h1>',
              id: "z~j26936VZDe7sLjPNLoO"
            }
          ],
          paddingLeft: 0,
          paddingTop: 0
        },
        {
          type: "Grid",
          only: [],
          id: "PTMlW1rEinlWEkKPCrbGe",
          item: true,
          alignItems: "flex-start",
          flexDirection: "row",
          justifyContent: "flex-end",
          xs: 6,
          content: [
            {
              type: "EditorPlugin",
              width: "auto",
              height: "auto",
              value:
                '<h2><span class="ql-size-huge" style="color: rgb(255, 255, 255);">«</span></h2>',
              id: "w0iksUNRHj3cSeaakpi7S"
            }
          ]
        },
        {
          type: "Grid",
          only: [],
          id: "ba6nbBK7ZUau~EGZrFPnt",
          item: true,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          xs: 6,
          content: [
            {
              type: "EditorPlugin",
              width: "100%",
              height: "auto",
              value:
                '<h1 class="ql-direction-rtl"><span style="color: rgb(255, 255, 255);">CBS помогает достигать целей быстро и выгодно</span></h1>',
              id: "GmBG~eQHKSGKhA9ReoR7E"
            }
          ],
          paddingTop: 0
        },
        {
          type: "Grid",
          only: [],
          id: "jwfme7F8dFcpz3TZy1UDQ",
          item: true,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          xs: 6,
          content: [
            {
              type: "EditorPlugin",
              width: "100%",
              height: "auto",
              value:
                '<p><span class="ql-size-large" style="color: rgb(255, 255, 255);">Время постоянно бросает нам вызовы. Единственный способ остаться на волне — развиваться и учиться на протяжении всей карьеры. Команда CBS каждый день выкладывается на 110%, чтобы вы получали больше актуальных знаний и навыков за меньшие время и деньги, чтобы у вас было все необходимое для достижения любых амбициозных целей. Жизнь не будет ждать, не останавливайтесь!»</span></p><p><br></p><p><span class="ql-size-large" style="color: rgb(187, 187, 187);">Денис Исаков, ректор City Business School</span></p>',
              id: "1rsvkkUywRrZxSuBigh8F"
            }
          ],
          paddingRight: 140
        }
      ],
      bgImageSrc: "https://cbsmba.com/static/media/sc1_bg.2752e079.jpg",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundAttachment: "scroll",
      backgroundSize: "cover",
      paddingBottom: 150,
      paddingTop: 150
    },
    {
      type: "Grid",
      only: [],
      id: "LTi6ixC07ZI9~DrfKFpSu",
      item: true,
      container: true,
      alignItems: "stretch",
      justifyContent: "flex-start",
      flexDirection: "row",
      xs: 12,
      section: true,
      content: [
        {
          type: "Grid",
          only: [],
          id: "UF3lDAt4oYgJo4sFbCIkQ",
          item: true,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          xs: 7,
          content: [
            {
              type: "EditorPlugin",
              width: "100%",
              height: "auto",
              value:
                '<p><span class="ql-size-large">City Business School – бизнес-школа нового типа, сочетающая в себе элементы классического бизнес-образования и новейших образовательных решений и технологий. Благодаря инновационным сервисам и лучшей в СНГ Системе дистанционного обучения студенты Школы получают все необходимые навыки для стремительного роста как в профессиональном, так и в личном плане.</span></p><p><br></p><p><span class="ql-size-large">Бизнес-школа представляет весь спектр программ и курсов бизнес-образования, включая узкоспециализированные направления, разработанные с учетом специфики отрасли. Практика, гибкость и доступность наших программ делают их удачным решением для всех, кто ценит свое время и хочет сам планировать свои ресурсы.</span></p>',
              id: "18THAi70RquQ_qECVZin6"
            }
          ],
          paddingLeft: 200
        },
        {
          type: "Grid",
          only: [],
          id: "OtmzL9bJZhIH8~~EMLqbe",
          item: true,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          xs: "auto",
          content: [
            {
              type: "EditorPlugin",
              width: "350px",
              height: "auto",
              value:
                '<h2 class="ql-align-center"><strong class="ql-size-huge" style="color: rgb(58, 122, 217);">№ 038 904</strong></h2><p class="ql-align-center">Лицензия на ведение образовательной деятельности</p>',
              id: "qvzAdIBAzAr_ZHjNlUzUv"
            }
          ],
          bgImageSrc: "https://cbsmba.com/static/media/about_bg.8d680770.png",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
          backgroundAttachment: "scroll",
          backgroundPosition: "center",
          paddingLeft: 50,
          paddingRight: 50
        }
      ],
      paddingBottom: 100,
      paddingTop: 100,
      color: "#ffffff"
    },
    {
      type: "Grid",
      only: [],
      id: "NwCPfgS0rCYtmWAoM43D3",
      item: true,
      container: true,
      alignItems: "stretch",
      justifyContent: "flex-start",
      flexDirection: "row",
      xs: 12,
      section: true,
      content: [
        {
          type: "Grid",
          only: [],
          id: "bF3t7yGjvx4T~Ssi_0QG4",
          item: true,
          alignItems: "flex-start",
          justifyContent: "center",
          flexDirection: "row",
          xs: 3,
          content: [
            {
              type: "EditorPlugin",
              width: "100%",
              height: "auto",
              value:
                '<h1><span class="ql-size-huge" style="color: rgb(0, 102, 204);">184</span></h1><p><span class="ql-size-large">Высококлассных специалиста</span></p>',
              id: "R~iOXmZKJUYxknkvUTKpm"
            }
          ],
          paddingRight: 50
        },
        {
          type: "Grid",
          only: [],
          id: "u39b~3_VQ1EJ2m1oFPEWy",
          item: true,
          alignItems: "flex-start",
          flexDirection: "row",
          justifyContent: "center",
          xs: 3,
          content: [
            {
              type: "EditorPlugin",
              width: "100%",
              height: "auto",
              value:
                '<h1><span class="ql-size-huge" style="color: rgb(0, 102, 204);">5 000</span></h1><p><span class="ql-size-large">Обучающихся студентов в год</span></p>',
              id: "w3P4bOZAt9yNxKYyjeybC"
            }
          ],
          paddingRight: 50
        },
        {
          type: "Grid",
          only: [],
          id: "QltBD2GalGsOtmZV3Od1e",
          item: true,
          alignItems: "flex-start",
          flexDirection: "row",
          justifyContent: "center",
          xs: 3,
          content: [
            {
              type: "EditorPlugin",
              width: "100%",
              height: "auto",
              value:
                '<h1><span class="ql-size-huge" style="color: rgb(0, 102, 204);">1 300</span></h1><p><span class="ql-size-large">Тренеров, экспертов, консультантов и топ-менеджеров известных в России и за рубежом</span></p>',
              id: "n8sR2UXyK7akz323j7Rjm"
            }
          ],
          paddingRight: 50
        },
        {
          type: "Grid",
          only: [],
          id: "A~uSz86~qTpQVnp_pRvzB",
          item: true,
          alignItems: "flex-start",
          flexDirection: "row",
          justifyContent: "center",
          xs: 3,
          content: [
            {
              type: "EditorPlugin",
              width: "100%",
              height: "auto",
              value:
                '<h1><span class="ql-size-huge" style="color: rgb(0, 102, 204);">12 000</span></h1><p><span class="ql-size-large">Часов обучения по различным программам в дистанционном формате</span></p>',
              id: "j_IH7Q2~z8j03L6cskiP_"
            }
          ]
        },
        {
          type: "Grid",
          only: [],
          id: "2yNCvwqSKMzhsemWEJxby",
          item: true,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          xs: 12,
          content: [
            {
              type: "ImagePlugin",
              borderRadius: 0,
              width: "auto",
              height: "auto",
              src: "https://cbsmba.com/static/media/about_bg.f706c58a.jpg",
              href: "",
              target: "_blank",
              id: "7jlydGvK_RYHLrF6Xtbsp"
            }
          ],
          hidden: false
        }
      ],
      color: "#ffffff",
      bgImageSrc: "",
      paddingBottom: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundAttachment: "scroll",
      backgroundSize: "auto",
      paddingLeft: 200,
      paddingRight: 200
    }
  ]
};

const reducer = (state = initialState, { type, payload }) => {
  console.log(JSON.stringify(state));
  switch (type) {
    case constants.REMOVE_EDITOR_CONTENT_ITEM:
      return {
        ...state,
        content: removeItemById(payload, state.content)
      };
    case constants.CHANGE_EDITOR_CONTENT_ITEM:
      return {
        ...state,
        content: changeItemById(payload, state.content)
      };
    case constants.COPY_EDITOR_CONTENT_ITEM:
      return {
        ...state,
        content: copyItemById(payload, state.content)
      };
    case constants.MOVE_EDITOR_CONTENT_ITEM_UP:
      return {
        ...state,
        content: moveItemById(payload, state.content, -1)
      };
    case constants.MOVE_EDITOR_CONTENT_ITEM_DOWN:
      return {
        ...state,
        content: moveItemById(payload, state.content, 1)
      };
    case constants.ADD_EDITOR_CONTENT_ITEM_AFTER:
      return {
        ...state,
        content: addItemAfterById(payload, state.content)
      };
    case constants.RESIZE_EDITOR_ITEMS_EQUAL:
      return {
        ...state,
        content: resizeItemsById(payload, state.content)
      };
    default:
      return state;
  }
};

export default reducer;
