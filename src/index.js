import { urlArgs, getUrlParam, getURLParameters } from "./utils/urlArgs";
import getCookies from "./utils/getCookies";
import isArray from "./utils/isArray";
import upsetArray from "./utils/upsetArray";
import isNumber from "./utils/isNumber";
import trimString from "./utils/trimString";
import formatDate from "./utils/formatDate";
import classof from "./utils/classof";
import httpClient from "./utils/httpClient";

const utils = {
  urlArgs,
  getUrlParam,
  getURLParameters,
  getCookies,
  isArray,
  upsetArray,
  isNumber,
  trimString,
  formateDate: formatDate,
  classof,
  httpClient
};

export default utils;
