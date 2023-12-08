import { __decorate } from "tslib";
import { LitElement, html, css, svg } from "lit";
import { customElement } from "lit/decorators.js";
import "../components/ewt-dialog";
import "../components/ewt-button";
import { dialogStyles } from "../styles";
const cloudDownload = svg `
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 510.322 510.322"
    xml:space="preserve"
    style="width: 28px; vertical-align: middle;"
  >
    <g>
      <path
        style="fill:currentColor;"
        d="M429.064,159.505c0-0.151,0.086-1.057,0.086-1.057c0-75.282-61.261-136.521-136.543-136.521    c-52.244,0-97.867,30.587-120.753,76.339c-11.67-9.081-25.108-15.682-40.273-15.682c-37.166,0-67.387,30.199-67.387,67.387    c0,0,0.453,3.279,0.798,5.824C27.05,168.716,0,203.423,0,244.516c0,25.389,9.901,49.268,27.848,67.171    c17.968,17.99,41.804,27.869,67.193,27.869h130.244v46.83h-54.66l97.694,102.008l95.602-102.008h-54.66v-46.83H419.25    c50.174,0,91.072-40.855,91.072-90.986C510.3,201.827,474.428,164.639,429.064,159.505z M419.207,312.744H309.26v-55.545h-83.975    v55.545H95.019c-18.184,0-35.333-7.075-48.211-19.996c-12.878-12.878-19.953-30.005-19.953-48.189    c0-32.68,23.21-60.808,55.264-66.956l12.511-2.394l-2.092-14.431l-1.488-10.785c0-22.347,18.184-40.51,40.531-40.51    c13.266,0,25.691,6.514,33.305,17.408l15.229,21.873l8.52-25.303c15.013-44.652,56.796-74.656,103.906-74.656    c60.506,0,109.709,49.203,109.709,109.644l-1.337,25.712l15.121,0.302l3.149-0.086c35.419,0,64.216,28.797,64.216,64.216    C483.401,283.969,454.604,312.744,419.207,312.744z"
      />
    </g>
  </svg>
`;
let EwtNoPortPickedDialog = class EwtNoPortPickedDialog extends LitElement {
    render() {
        return html `
      <ewt-dialog
        open
        heading="未选择端口"
        scrimClickAction
        @closed=${this._handleClose}
      >
        <div>
          如果您因为没有看到列出的设备而未选择端口，请尝试以下步骤：
        </div>
        <ol>
          <li>
            确保设备已连接到这台计算机（运行显示此网站的浏览器的计算机）
          </li>
          <li>
            大多数设备在开机时都会有一个小灯。如果您有的话，请确保它已打开。
          </li>
          <li>
            确保您使用的 USB 电缆可用于数据传输，而不是仅用于供电的电缆。
          </li>
          <li>
            确保您安装了正确的驱动程序。以下是ESP设备中常用芯片的驱动程序：
            <ul>
              <li>
                ESP32 CP2102 驱动:
                <a
                  href="https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers"
                  target="_blank"
                  rel="noopener"
                  >Windows & Mac</a
                >
              </li>
              <li>
                ESP8266 CH342, CH343, CH9102 驱动:
                <a
                  href="https://www.wch.cn/downloads/CH343SER_ZIP.html"
                  target="_blank"
                  rel="noopener"
                  >Windows</a
                >,
                <a
                  href="https://www.wch.cn/downloads/CH34XSER_MAC_ZIP.html"
                  target="_blank"
                  rel="noopener"
                  >Mac</a
                >
              </li>
              <li>
                CH340, CH341 驱动:
                <a
                  href="https://www.wch.cn/downloads/CH341SER_ZIP.html"
                  target="_blank"
                  rel="noopener"
                  >Windows</a
                >,
                <a
                  href="https://www.wch.cn/downloads/CH341SER_MAC_ZIP.html"
                  target="_blank"
                  rel="noopener"
                  >Mac</a
                >
              </li>
            </ul>
          </li>
        </ol>
        ${this.doTryAgain
            ? html `
              <ewt-button
                slot="primaryAction"
                dialogAction="close"
                label="Try Again"
                @click=${this.doTryAgain}
              ></ewt-button>

              <ewt-button
                no-attention
                slot="secondaryAction"
                dialogAction="close"
                label="取消"
              ></ewt-button>
            `
            : html `
              <ewt-button
                slot="primaryAction"
                dialogAction="close"
                label="关闭"
              ></ewt-button>
            `}
      </ewt-dialog>
    `;
    }
    async _handleClose() {
        this.parentNode.removeChild(this);
    }
};
EwtNoPortPickedDialog.styles = [
    dialogStyles,
    css `
      li + li,
      li > ul {
        margin-top: 8px;
      }
      ul,
      ol {
        margin-bottom: 0;
        padding-left: 1.5em;
      }
    `,
];
EwtNoPortPickedDialog = __decorate([
    customElement("ewt-no-port-picked-dialog")
], EwtNoPortPickedDialog);
