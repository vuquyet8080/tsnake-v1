import { ACTION } from "@/constants/action";
import { isEmpty } from "lodash";
import { popupCenter } from "./popupCenter";

export const onActionButton = async ({ type, action, data, auth }) => {
  if (isEmpty(auth) && type === "twitter") {
    return popupCenter("/login/twitter", "Sample Sign In");
  }

  if (type === "twitter" && action === ACTION.twitter.follow) {
    // provider;
    return window.open(
      `https://twitter.com/intent/follow?screen_name=${data?.targetActionId}`,
      // "twitter",
      "",
      "width = 700, height = 700",
    );
  }
  if (type === "twitter" && action === ACTION.twitter.like) {
    return window.open(
      `https://twitter.com/intent/like?tweet_id=${data?.targetActionId}`,
      // "twitter",
      "",
      "width = 700, height = 700",
    );
  }
  if (type === "twitter" && action === ACTION.twitter["post&tag"]) {
    return window.open(
      `${data?.targetActionId}`,
      // "twitter",
      "",
      "width = 700, height = 700",
    );
  }
  if (type === "twitter" && action === ACTION.twitter.retweet) {
  }
};

export const onActionAuthButton = async ({ type, auth }) => {
  if (isEmpty(auth) && type === "twitter") {
    return popupCenter("/login/twitter", "Sample Sign In");
  }
};
