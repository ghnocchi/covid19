(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{512:function(e){e.exports=JSON.parse('{"date":"2020/3/6 21:00","labels":["1/1~1/5","1/6~1/12","1/13~1/19","1/20~1/26","1/27~2/2","2/3~2/9","2/10~2/16","2/17~2/23","2/24~3/1","3/2~3/8"],"datasets":[{"label":"第一庁舎計","data":[0,12572,10267,12387,12248,12924,10221,12690,8841,9468]},{"label":"第二庁舎計","data":[0,14656,11548,13963,13611,13711,10997,14374,10734,12271]},{"label":"議事堂計","data":[0,422,316,321,632,492,464,553,492,381]}]}')},519:function(e,t,r){"use strict";r.r(t);var o=r(382),n=r(428),d=r(512),c=r(429),m=r(434),h=r(430),l=r(432),f=r(435),$=r(436),v=r(431),C={components:{ConfirmedCasesDetailsCard:c.a,ConfirmedCasesNumberCard:m.a,ConfirmedCasesAttributesCard:h.a,TestedNumberCard:l.a,TelephoneAdvisoryReportsNumberCard:f.a,ConsultationDeskReportsNumberCard:$.a,MetroCard:v.a},data:function(){var title,e;switch(this.$route.params.card){case"details-of-confirmed-cases":title=this.$t("検査陽性者の状況"),e=o.inspections_summary.date;break;case"number-of-confirmed-cases":title=this.$t("陽性患者数"),e=o.patients.date;break;case"attributes-of-confirmed-cases":title=this.$t("陽性患者の属性"),e=o.patients.date;break;case"number-of-tested":title=this.$t("検査実施数"),e=o.inspections_summary.date;break;case"number-of-reports-to-covid19-telephone-advisory-center":title=this.$t("新型コロナコールセンター相談件数"),e=o.contacts.date;break;case"number-of-reports-to-covid19-consultation-desk":title=this.$t("新型コロナ受診相談窓口相談件数"),e=o.querents.date;break;case"predicted-number-of-toei-subway-passengers":title=this.$t("都営地下鉄の利用者数の推移"),e=n.date;break;case"agency":title=this.$t("都庁来庁者数の推移"),e=d.date}var data={title:title,updatedAt:e};return data},head:function(){var e="https://stopcovid19.metro.tokyo.lg.jp",t=(new Date).getTime(),r=e+"/ogp/"+this.$i18n.locale+"/"+this.$route.params.card+".png?t="+t,o=this.updatedAt+" | "+this.$t("当サイトは新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するために、東京都が開設したものです。");return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:e+this.$route.path+"/"},{hid:"og:title",property:"og:title",content:this.title+" | "+this.$t("東京都")+" "+this.$t("新型コロナウイルス感染症")+this.$t("対策サイト")},{hid:"description",name:"description",content:o},{hid:"og:description",property:"og:description",content:o},{hid:"og:image",property:"og:image",content:r},{hid:"twitter:image",name:"twitter:image",content:r}]}}},k=r(5),component=Object(k.a)(C,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",["details-of-confirmed-cases"==this.$route.params.card?t("confirmed-cases-details-card"):"number-of-confirmed-cases"==this.$route.params.card?t("confirmed-cases-number-card"):"attributes-of-confirmed-cases"==this.$route.params.card?t("confirmed-cases-attributes-card"):"number-of-tested"==this.$route.params.card?t("tested-number-card"):"number-of-reports-to-covid19-telephone-advisory-center"==this.$route.params.card?t("telephone-advisory-reports-number-card"):"number-of-reports-to-covid19-consultation-desk"==this.$route.params.card?t("consultation-desk-reports-number-card"):"predicted-number-of-toei-subway-passengers"==this.$route.params.card?t("metro-card"):this._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);