import { Component } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  '7H0PE1MI2P',
  '1ba6db3d56a89b8792b6247ba1b394ec'
);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config = {
    indexName: 'flix-posts-finished',
    searchClient
  };
}
