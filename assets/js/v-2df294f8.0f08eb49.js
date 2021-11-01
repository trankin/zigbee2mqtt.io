"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[9829],{64187:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o={key:"v-2df294f8",path:"/devices/RTCGQ11LM.html",title:"Xiaomi RTCGQ11LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi RTCGQ11LM control via MQTT",description:"Integrate your Xiaomi RTCGQ11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2019-07-22T20:08:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Troubleshooting: device stops sending messages/disconnects from network",slug:"troubleshooting-device-stops-sending-messages-disconnects-from-network",children:[]},{level:3,title:"Device type specific configuration",slug:"device-type-specific-configuration",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Occupancy (binary)",slug:"occupancy-binary",children:[]},{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Illuminance_lux (numeric)",slug:"illuminance-lux-numeric",children:[]},{level:3,title:"Illuminance (numeric)",slug:"illuminance-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/RTCGQ11LM.md",git:{updatedTime:1635800594e3}}},30169:(e,t,i)=>{i.r(t),i.d(t,{default:()=>C});var o=i(66252);const n=(0,o.uE)('<h1 id="xiaomi-rtcgq11lm" tabindex="-1"><a class="header-anchor" href="#xiaomi-rtcgq11lm" aria-hidden="true">#</a> Xiaomi RTCGQ11LM</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>RTCGQ11LM</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>Aqara human body movement and illuminance sensor</td></tr><tr><td>Exposes</td><td>battery, occupancy, temperature, voltage, illuminance_lux, illuminance, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/RTCGQ11LM.jpg" alt="Xiaomi RTCGQ11LM"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking). After this the device will automatically join. If this doesn&#39;t work, try with a single short button press.</p><h3 id="troubleshooting-device-stops-sending-messages-disconnects-from-network" tabindex="-1"><a class="header-anchor" href="#troubleshooting-device-stops-sending-messages-disconnects-from-network" aria-hidden="true">#</a> Troubleshooting: device stops sending messages/disconnects from network</h3><p>Since Xiaomi devices do not fully comply to the Zigbee standard, it sometimes happens that they disconnect from the network. Most of the times this happens because of the following reasons:</p><ul><li>Device has a weak signal, you can see the signal quality in the published messages as <code>linkquality</code>. A linkquality &lt; 20 is considered weak.</li><li>Low battery voltage, this can even happen when the battery still appears full. Try a different battery.</li><li>The device is connected through a router which cannot deal with Xiaomi devices. This is known to happen devices from: Centralite, General Electric, Iris, Ledvance, OSRAM, Sylvania, SmartThings, Securifi.</li></ul>',8),a=(0,o.Uk)("More detailed information about this can be found "),c={href:"https://community.hubitat.com/t/xiaomi-aqara-devices-pairing-keeping-them-connected/623",target:"_blank",rel:"noopener noreferrer"},r=(0,o.Uk)("here"),d=(0,o.Uk)("."),s=(0,o._)("h3",{id:"device-type-specific-configuration",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#device-type-specific-configuration","aria-hidden":"true"},"#"),(0,o.Uk)(" Device type specific configuration")],-1),l=(0,o.Uk)("How to use device type specific configuration"),u=(0,o.uE)("<ul><li><p><code>illuminance_lux_calibration</code>: Allows to manually calibrate illuminance values, e.g. <code>95</code> would take 95% to the illuminance reported by the device; default <code>100</code>. Calibration will take into affect with next report of device.</p></li><li><p><code>temperature_precision</code>: Controls the precision of <code>temperature</code> values, e.g. <code>0</code>, <code>1</code> or <code>2</code>; default <code>2</code>. To control the precision based on the temperature value set it to e.g. <code>{30: 0, 10: 1}</code>, when temperature &gt;= 30 precision will be 0, when temperature &gt;= 10 precision will be 1. Precision will take into affect with next report of device.</p></li><li><p><code>temperature_calibration</code>: Allows to manually calibrate temperature values, e.g. <code>1</code> would add 1 degree to the temperature reported by the device; default <code>0</code>. Calibration will take into affect with next report of device.</p></li><li><p><code>no_occupancy_since</code>: Timeout (in seconds) after which <code>no_occupancy_since</code> is sent. This indicates the time since the last occupancy was detected. For example <code>no_occupancy_since: [10, 60]</code> will send a <code>{&quot;no_occupancy_since&quot;: 10}</code> after 10 seconds and a <code>{&quot;no_occupancy_since&quot;: 60}</code> after 60 seconds.</p></li><li><p><code>occupancy_timeout</code>: Timeout (in seconds) after which the <code>occupancy: false</code> message is sent. If not set, the timeout is <code>90</code> seconds. When set to <code>0</code> no <code>occupancy: false</code> is sent.</p></li></ul>",1),h=(0,o._)("strong",null,"IMPORTANT",-1),p=(0,o.Uk)(": "),m=(0,o._)("code",null,"occupancy_timeout",-1),f=(0,o.Uk)(" should not be set to lower than 60 seconds. The reason is this: after detecting a motion the sensor ignores any movements for exactly 60 seconds. In case there are movements after this 60 seconds, a new message ("),g=(0,o._)("code",null,"occupancy: true",-1),b=(0,o.Uk)(") will be sent and the sensor will go to sleep for another minute, and so on. Therefore, in order to sustain "),v=(0,o._)("code",null,"occupancy: true",-1),y=(0,o.Uk)(", you need a reasonable window after this 60s sleep to determine continued occupancy. This is expected behaviour (see "),w={href:"https://github.com/Koenkk/zigbee2mqtt/issues/270#issuecomment-414999973",target:"_blank",rel:"noopener noreferrer"},k=(0,o.Uk)("#270"),x=(0,o.Uk)("). To work around this, a "),T={href:"https://community.smartthings.com/t/making-xiaomi-motion-sensor-a-super-motion-sensor/139806",target:"_blank",rel:"noopener noreferrer"},_=(0,o.Uk)("hardware modification"),q=(0,o.Uk)(" is needed."),M=(0,o.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric" aria-hidden="true">#</a> Illuminance_lux (numeric)</h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric" aria-hidden="true">#</a> Illuminance (numeric)</h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',15),I={},C=(0,i(83744).Z)(I,[["render",function(e,t){const i=(0,o.up)("OutboundLink"),I=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[n,(0,o._)("p",null,[a,(0,o._)("a",c,[r,(0,o.Wm)(i)]),d]),s,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(I,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[l])),_:1})])]),u,(0,o._)("p",null,[h,p,m,f,g,b,v,y,(0,o._)("a",w,[k,(0,o.Wm)(i)]),x,(0,o._)("a",T,[_,(0,o.Wm)(i)]),q]),M],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,o]of t)e[i]=o;return e}}}]);