import { Component, Input, OnInit } from "@angular/core";
import { setBlockType } from "prosemirror-commands";
import { EditorState, Plugin, PluginKey, Transaction } from "prosemirror-state";
import { EditorView } from "prosemirror-view";

import { Editor } from "ngx-editor";
import { isNodeActive } from "ngx-editor/helpers";

@Component({
  selector: "app-custom-editor",
  templateUrl: "./customeditor.component.html",
  styleUrls: ["./customeditor.component.scss"]
})
export class CustomeditorComponent implements OnInit {
  constructor() {}

  @Input() editor: Editor;
  isActive = false;
  isDisabled = false;

  onClick(e: MouseEvent): void {
    e.preventDefault();
    const { state, dispatch } = this.editor.view;
    this.execute(state, dispatch);
  }

  execute(state: EditorState, dispatch?: (tr: Transaction) => void): boolean {
    const { schema } = state;

    if (this.isActive) {
      return setBlockType(schema.nodes.paragraph)(state, dispatch);
    }

    return setBlockType(schema.nodes.code_block)(state, dispatch);
  }

  update = (view: EditorView) => {
    const { state } = view;
    const { schema } = state;
    this.isActive = isNodeActive(state, schema.nodes.code_block);
    this.isDisabled = !this.execute(state, null); // returns true if executable
  };

  ngOnInit(): void {
    const plugin = new Plugin({
      key: new PluginKey(`custom-menu-codemirror`),
      view: () => {
        return {
          update: this.update
        };
      }
    });

    this.editor.registerPlugin(plugin);
  }
}

