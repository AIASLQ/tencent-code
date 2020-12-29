import { Modal as ModalMain } from "./ModalMain";
import { confirm, ModalConfirm, } from "./ModalConfirm";
import { success, error, alert, ModalAlert, } from "./ModalAlert";
import { show } from "./ModalShow";
import { withStatics } from "../_util/with-statics";
export { ModalConfirm, ModalAlert, };
export var Modal = withStatics(ModalMain, {
    /**
     * 渲染对话框的主要内容
     */
    Body: ModalMain.Body,
    /**
     * 渲染对话框的底部内容
     */
    Footer: ModalMain.Footer,
    /**
     * 对话框消息内容，可置于 ModalMain..Body 中
     */
    Message: ModalMain.Message,
    /**
     * API 的方式唤起一个确认对话框
     * @returns 异步返回布尔值，为 `true` 则表示用户确认，为 `false` 则表示用户取消
     */
    confirm: confirm,
    /**
     * API 的方式唤起一个对话框显示成功信息
     */
    success: success,
    /**
     * API 的方式唤起一个对话框显示失败信息
     */
    error: error,
    /**
     * API 的方式唤起一个对话框显示提醒信息
     */
    alert: alert,
    /**
     * API 的方式唤起一个对话框
     */
    show: show,
});
//# sourceMappingURL=Modal.js.map