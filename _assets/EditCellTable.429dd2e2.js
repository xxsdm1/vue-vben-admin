import{a as e,i as t,o as i,j as s,k as o,w as r}from"./index.087827bd.js";import"./xlsx.a48e520c.js";import"./SettingOutlined.7b366c4b.js";import"./index.b3d27e93.js";import"./Trigger.1f027942.js";import"./omit.c8603bdb.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d1376850.js";import"./CheckOutlined.e291a1f5.js";import"./index.ecb658c5.js";import"./index.d2cb24e8.js";import"./colors.863e863c.js";import"./index.bbd9dec1.js";import"./RightOutlined.a721f23a.js";import"./index.648eb728.js";import"./types.ec785e86.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.42257f09.js";import"./index.ff61dcf3.js";import"./index.ea1c54a6.js";import"./UpOutlined.25f25eae.js";import"./LeftOutlined.670b6be7.js";import"./DownOutlined.6f919f42.js";import"./index.335f5816.js";import"./index.f15549ef.js";import"./index.5c0386e3.js";import"./zh_CN.0242bd16.js";import"./index.2ea1877e.js";import"./index.f02f1014.js";import"./CaretDownFilled.c5689b7c.js";import"./CheckOutlined.9988e31e.js";import"./CloseOutlined.1a46c05c.js";import{s as d,a as m,c as n}from"./EditTableHeaderIcon.78e8b2e6.js";import"./index.f6b60b0d.js";import"./LeftOutlined.f312add8.js";import"./functional.7d386e92.js";import"./RightOutlined.83a2612e.js";import"./useContext.2506cc4d.js";import"./useTimeout.e40508cb.js";import"./useDebounce.9c7c5ce5.js";import"./useEventListener.6468cfe0.js";import"./useBreakpoint.be0fab75.js";import"./resizeEvent.dd57c904.js";import"./domUtils.7b78aff8.js";import"./tsxHelper.c465228b.js";import"./useExpose.7e9a2ef1.js";import"./index.1982236a.js";import"./propTypes.81b46aad.js";import"./index.859e5d00.js";import"./index.663602f0.js";import"./useWindowSizeFn.6bad7e86.js";import"./uuid.40269c00.js";import"./download.b61d92d2.js";import"./useForm.162de352.js";import"./useFullScreen.923f5ed8.js";import"./index.99df5bc0.js";import{u as p}from"./useTable.fc09cb81.js";import{d as a}from"./table.95b31246.js";const j=[{dataIndex:"id",slots:{title:"customId"},customRender:n({dataIndex:"id"})},{dataIndex:"name",slots:{title:"customName"},customRender:n({dataIndex:"name"})},{title:"地址",dataIndex:"address",sorter:!0}];var c=e({components:{BasicTable:d,EditTableHeaderIcon:m},setup(){const[e]=p({title:"可编辑单元格示例",api:a,columns:j,showIndexColumn:!1});return{registerTable:e}}});const l={class:"p-4"};c.render=function(e,d,m,n,p,a){const j=t("EditTableHeaderIcon"),c=t("BasicTable");return i(),s("div",l,[o(c,{onRegister:e.registerTable},{customId:r((()=>[o(j,{title:"Id"})])),customName:r((()=>[o(j,{title:"姓名"})])),_:1},8,["onRegister"])])};export default c;