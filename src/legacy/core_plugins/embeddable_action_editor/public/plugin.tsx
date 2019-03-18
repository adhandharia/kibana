/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { I18nProvider } from '@kbn/i18n/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { ActionEventEditorApp } from './app/';
import { CoreShim, PluginShim } from './shim';

const REACT_ROOT_ID = 'actionEditorRoot';

export class Plugin {
  public start({ core, plugins }: { core: CoreShim; plugins: PluginShim }): void {
    core.onRenderComplete(() => {
      const root = document.getElementById(REACT_ROOT_ID);
      ReactDOM.render(
        <I18nProvider>
          <ActionEventEditorApp getEmbeddableFactory={plugins.embeddables.getEmbeddableFactory} />
        </I18nProvider>,
        root
      );
    });
  }
}
