import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcIconComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent, IgcRippleComponent, IgcIconComponent);

@customElement('app-master-view')
export default class MasterView extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .button {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="row-layout group">
        <igc-button class="button">
          TEXT
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" class="button">
          TEXT
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="flat" class="button">
          TEXT
          <igc-ripple></igc-ripple>
        </igc-button>
      </div>
      <div class="row-layout group">
        <igc-button class="button">
          Button Text
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="outlined" class="button">
          <span class="material-icons">
            add
          </span>
          <span>Button Text</span>
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="flat" class="button">
          Button Text
          <igc-ripple></igc-ripple>
        </igc-button>
      </div>
    `;
  }
}
