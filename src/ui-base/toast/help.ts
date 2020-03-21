import QMToast from "./";

interface IToastProps {
  text: string;
  icon?: string;
  duration?: number;
}

export default {
  instance: null,
  timeId: null,
  seInstance(instance: QMToast) {
    this.instance = instance;
  },
  delay(delay = 2000) {
    clearTimeout(this.timeId);
    if (!delay) {
      return;
    }
    this.timeId = setTimeout(() => {
      this.hide();
    }, delay);
  },

  hide() {
    this.instance.hide();
  },
  show(props: IToastProps) {
    this.instance.show({ icon: null, ...props });
    this.delay(props.duration);
  },

  //
  success(text: string) {
    this.show({
      icon: "success",
      text
    });
  },
  toast(text: string) {
    this.show({ text });
  }
};
