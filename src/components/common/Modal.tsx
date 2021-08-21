import { Modal } from "antd";

export const ErrorModal = () => {
  Modal.error({
    title: "생성 오류",
    content: "내용과 마감일을 다시 확인해주세요."
  });
};
