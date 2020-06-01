// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {queryContains: 'sp_FChoice=synth'},
        }),
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {queryContains: 'sp_FChoice=species'},
        }),
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {queryContains: 'm_id=8'},
        })
      ],
      
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
