import Constant from "@/constants/constant.json";

export default {
  data() {
    return {
      constant: "",
    };
  },
  mounted() {
    //process.env.NODE_ENV === "development" ? Constant.dev : Constant.prod,
    alert(location.host)
    if (
      location.host === "client-dev-b7062.web.app" ||
      location.host === "localhost:8080" || location.host == '192.168.18.25:8080'
    ) {
      this.constant = Constant.dev;
    } else this.constant = Constant.prod;
  },
};
