function w(o){window.enmity.plugins.registerPlugin(o)}const m=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const t=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const u=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme;const c=window.enmity.modules.common.Linking,y=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function g(o){return window.enmity.patcher.create(o)}var h="NoBandwidthKick",a="1.0.0",p="Stops discord from disconnecting you when you're in a call alone for more than 5 minutes",T=[{name:"mafu",id:"519760564755365888"}],f={name:h,version:a,description:p,authors:T};const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList;const S=e.Image;e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const b=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch;const r=e.Text;e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable;const l=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio;const i=e.FormRow,F=e.FormSection;e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;function s(o){return window.enmity.assets.getIDByName(o)}const v={byProps:(...o)=>window.enmity.modules.filters.byProps(...o),byName:(o,n)=>window.enmity.modules.filters.byName(o,n),byTypeName:(o,n)=>window.enmity.modules.filters.byTypeName(o,n),byDisplayName:(o,n)=>window.enmity.modules.filters.byDisplayName(o,n)};function C(...o){return window.enmity.modules.bulk(...o)}function E(...o){return window.enmity.modules.getByProps(...o)}window.enmity.modules.common;const N=s("img_account_sync_github_white"),A=s("Discord"),I=s("img_account_sync_twitter_white"),R=E("acceptInviteAndTransitionToInviteChannel");var k=({settings:o})=>{const n=y.createThemedStyleSheet({container:{flexDirection:"row",justifyContent:"center",alignItems:"center"},image:{width:70,height:70,marginTop:20,marginLeft:20},title:{flexDirection:"column"},name:{fontSize:30,paddingTop:20,paddingLeft:20,paddingRight:30,color:m.ThemeColorMap.HEADER_PRIMARY},author:{fontSize:15,paddingLeft:50,color:m.ThemeColorMap.HEADER_SECONDARY},info:{height:45,paddingTop:3,paddingBottom:3,justifyContent:"center",alignItems:"center"},footer:{color:m.ThemeColorMap.HEADER_SECONDARY,textAlign:"center",paddingTop:10,paddingBottom:20}});return t.createElement(b,null,t.createElement(l,{style:n.container},t.createElement(S,{source:{uri:"https://avatars.githubusercontent.com/u/43488869"},style:n.image}),t.createElement(l,{style:n.title},t.createElement(r,{style:n.name},"NoBandwidthKick"),t.createElement(r,{style:n.author},"by mafu"))),t.createElement(F,{title:"INFORMATION"},t.createElement(i,{label:"Follow me on Twitter",style:n.info,trailing:i.Arrow,leading:t.createElement(i.Icon,{source:I}),onPress:()=>{c.openURL("https://twitter.com/m4fn3")}}),t.createElement(i,{label:"Visit my server for help",style:n.info,trailing:i.Arrow,leading:t.createElement(i.Icon,{source:A}),onPress:()=>{R.acceptInviteAndTransitionToInviteChannel({inviteKey:"TrCqPTCrdq",context:{location:"Invite Button Embed"},callback:()=>{u.pop()}})}}),t.createElement(i,{label:"Check Source on GitHub",style:n.info,trailing:i.Arrow,leading:t.createElement(i.Icon,{source:N}),onPress:()=>{c.openURL("https://github.com/m4fn3/NoBandwidthKick")}})),t.createElement(r,{style:n.footer},`v${a}`))};const[B]=C(v.byProps("Timeout")),d=g("NoBandwidthKick"),D={...f,onStart(){d.before(B.Timeout.prototype,"start",(o,n,L)=>{n[1].name==="disconnect"&&(n[1]=()=>{})})},onStop(){d.unpatchAll()},getSettingsPanel({settings:o}){return t.createElement(k,{settings:o})}};w(D);
