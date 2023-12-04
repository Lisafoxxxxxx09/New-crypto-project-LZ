import * as core from '@actions/core';
import { context, getOctokit } from '@actions/github';

import { retrievePullRequest } from './shared/pull-request';


  const personalAccessToken = process.env.BUG_REPORT_TOKEN;
  if (!personalAccessToken) {
    core.setFailed('BUG_REPORT_TOKEN not found');
    process.exit(1);
  }
