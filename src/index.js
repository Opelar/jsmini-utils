import { urlArgs, getUrlParam, getURLParameters } from "./utils/urlArgs";
import getCookies from "./utils/getCookies";
import isArray from "./utils/isArray";
import upsetArray from "./utils/upsetArray";
import isNumber from "./utils/isNumber";
import trimString from "./utils/trimString";
import formatDate from "./utils/formatDate";
import classof from "./utils/classof";
import httpClient from "./utils/httpClient";
import makeQueryString from "./utils/makeQueryString"
import isPromise from "./utils/isPromise"
import isPlainObject from "./utils/isPlainObject"
import tryGetValue from "./utils/tryGetValue"
import shallowEqual from "./utils/shallowEqual"

const utils = {
  urlArgs,
  getUrlParam,
  getURLParameters,
  getCookies,
  isArray,
  upsetArray,
  isNumber,
  trimString,
  formatDate,
  classof,
  httpClient,
  makeQueryString,
  isPromise,
  isPlainObject,
  tryGetValue,
  shallowEqual
};

export default utils;
