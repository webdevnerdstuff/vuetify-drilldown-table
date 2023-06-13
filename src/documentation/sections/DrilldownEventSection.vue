<template>
	<v-row>
		<v-col
			id="events-drilldown"
			cols="12"
		>
			<h3 :class="classes.h3">
				<a
					:class="classes.headerA"
					href="#events-drilldown"
				>#</a>
				Drilldown Event
			</h3>
		</v-col>

		<v-col cols="12">
			The <code class="inline-code">update:drilldown</code> event is emitted when a row is expanded. This should be used
			instead of the <code class="inline-code">update:expanded</code> event as it holds the information you will need to
			determine which drilldown table is being loaded, or to customize per level settings, and more.
		</v-col>

		<v-col cols="12">
			Here is an example of what the data will look like when the event is emitted:
		</v-col>

		<v-col cols="12">
			<CodeBlock
				:code="drilldownEventObject"
				:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
				lang="javascript"
				max-height="500px"
				:prismjs="codeBlockSettings.plugin === 'prismjs'"
				:theme="codeBlockSettings.theme"
			/>
		</v-col>

		<v-col cols="12">
			The data contained in the event object contains the table settings (props) of the current level table you are
			drilling down <i>from</i>. In addition to these settings, it will also contain the
			<code class="inline-code">item</code> object which has the data of the row that was clicked on.
			This <code class="inline-code">item</code> is similar to the Vuetify <code class="inline-code">item</code> property.
		</v-col>

		<v-col cols="12">
			<CodeBlock
				:code="itemExample"
				:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
				label="Item Object Example"
				lang="typescript"
				:prismjs="codeBlockSettings.plugin === 'prismjs'"
				:theme="codeBlockSettings.theme"
			/>
		</v-col>

		<v-col cols="12">
			Inside of the <code class="inline-code">item</code> object <code class="inline-code">raw</code> and/or
			<code class="inline-code">value</code> property, we will add the <code class="inline-code">child</code> object that
			will hold the settings for the next drilldown table/level. <code class="inline-code">child</code> is the
			default <a href="#props-all-itemchildrenkey"><code class="inline-code">itemChildrenKey</code></a> that is used, but
			you can use whatever key you would like as long as you update/set the <a href="#props-all-itemchildrenkey"><code
					class="inline-code"
				>itemChildrenKey</code></a> prop.
		</v-col>

		<v-col cols="12">
			<CodeBlock
				:code="itemChildExample"
				:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
				lang="typescript"
				:prismjs="codeBlockSettings.plugin === 'prismjs'"
				:theme="codeBlockSettings.theme"
			/>
		</v-col>

		<v-col cols="12">
			This <code class="inline-code">child</code> object is where you will add the settings of the next level table you
			are drilling down <i>to</i>. For the data of the next level table, you will add the data to the top level tables
			<code class="inline-code">items</code> array for the item you are drilling down from.
		</v-col>

		<v-col cols="12">
			The deeper you drilldown you will need to update your front-end logic accordingly. It's not easy to fully explain
			recursion in a drilldown table, so it's highly recommended to check out the <a href="#playground">Developer
				Playground</a> example and examining the code. There may be other ways to handle how all of this works, but this
			is one way that does work.
		</v-col>

		<v-col cols="12">

		</v-col>
	</v-row>
</template>


<script setup>
import { inject } from 'vue';
// import { useCoreStore } from '@/stores/index';


const props = defineProps({
	codeBlockOptions: {
		required: true,
		type: Object,
	},
});

const codeBlockSettings = computed(() => props.codeBlockOptions);
// const store = useCoreStore();
const classes = inject('classes');


const itemExample = `item: {
  columns: [],
  index: 0,
  raw: {},
  selectable: {},
  type: 'item',
  value: {}
}`;

const itemChildExample = `item: {
  columns: [],
  index: 0,
  raw: {
    ...
    child: {},
  },
  selectable: {},
  type: 'item',
  value: {
    ...
    child: {},
  }
}`;

const drilldownEventObject = `{
  "headers": [
    {
      "align": "start",
      "key": "id",
      "title": "User ID",
      "width": 370
    },
    {
      "align": "start",
      "key": "name",
      "title": "Name"
    },
    {
      "align": "start",
      "key": "email",
      "title": "Email"
    },
    {
      "key": "data-table-expand",
      "sortable": false,
      "title": ""
    }
  ],
  "items": [],
  "itemsPerPageOptions": [
    {
      "title": "5",
      "value": 5
    },
    {
      "title": "10",
      "value": 10
    },
    {
      "title": "25",
      "value": 25
    },
    {
      "title": "50",
      "value": 50
    },
    {
      "title": "100",
      "value": 100
    },
    {
      "title": "$vuetify.dataFooter.itemsPerPageAll",
      "value": -1
    }
  ],
  "colors": null,
  "density": "compact",
  "drilldownKey": "id",
  "elevation": 5,
  "expandOnClick": false,
  "fixedFooter": true,
  "fixedHeader": true,
  "footers": [
    {
      "align": "start",
      "key": "id",
      "title": "User ID",
      "width": 350
    },
    {
      "align": "start",
      "key": "name",
      "title": "Name"
    },
    {
      "align": "start",
      "key": "email",
      "title": "Email"
    },
    {
      "key": "data-table-expand",
      "title": ""
    }
  ],
  "height": "auto",
  "hideNoData": false,
  "hover": false,
  "isDrilldown": false,
  "itemChildrenKey": "child",
  "itemValue": "id",
  "itemsLength": 0,
  "itemsPerPage": 5,
  "level": 1,
  "levels": 3,
  "loaderHeight": 2,
  "loaderSize": "default",
  "loaderType": [
    "linear",
    "circular",
    "text",
    "skelton"
  ],
  "loading": false,
  "loadingText": "",
  "multiSort": false,
  "noDataText": "$vuetify.noDataText",
  "noFilter": false,
  "page": 1,
  "returnObject": true,
  "search": "",
  "searchDebounce": 750,
  "searchMaxWait": 1000,
  "searchProps": {
    "cols": {
      "lg": 3,
      "md": 6,
      "sm": 12,
      "xl": 3,
      "xs": 12,
      "xxl": 2
    },
    "density": "comfortable",
    "variant": "underlined"
  },
  "server": true,
  "showDrilldownWhenLoading": true,
  "showExpand": false,
  "showFooterRow": false,
  "showSearch": true,
  "showSelect": false,
  "skeltonType": "heading@1",
  "sortBy": [],
  "tableType": {},
  "width": "100%",
  "item": {
    "type": "item",
    "index": 0,
    "value": {
      "postIds": null,
      "id": "1",
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      },
      "child": {
        "color": "primary",
        "density": "compact",
        "drilldownKey": "id",
        "elevation": 5,
        "expandOnClick": false,
        "firstIcon": "mdi mdi-page-first",
        "fixedFooter": true,
        "fixedHeader": true,
        "footers": [
          {
            "align": "start",
            "key": "userId",
            "title": "User ID",
            "width": 100
          },
          {
            "align": "start",
            "key": "id",
            "title": "Post ID",
            "width": 250
          },
          {
            "align": "start",
            "key": "title",
            "title": "Post"
          },
          {
            "key": "data-table-expand",
            "title": ""
          }
        ],
        "headers": [
          {
            "align": "start",
            "key": "userId",
            "sortable": false,
            "title": "User ID",
            "width": 110
          },
          {
            "align": "start",
            "key": "id",
            "title": "Post ID",
            "width": 260
          },
          {
            "align": "start",
            "key": "title",
            "title": "Post"
          },
          {
            "key": "data-table-expand",
            "title": ""
          }
        ],
        "height": "auto",
        "hideDrilldownWhenLoading": true,
        "itemChildrenKey": "child",
        "itemProps": [],
        "itemTitle": "title",
        "itemValue": "id",
        "items": [
          {
            "commentIds": null,
            "userId": 1,
            "id": "1",
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          },
          {
            "commentIds": null,
            "userId": 1,
            "id": "2",
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
          },
          {
            "commentIds": null,
            "userId": 1,
            "id": "3",
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
          },
          {
            "commentIds": null,
            "userId": 1,
            "id": "4",
            "title": "eum et est occaecati",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
          },
          {
            "commentIds": null,
            "userId": 1,
            "id": "5",
            "title": "nesciunt quas odio",
            "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
          }
        ],
        "itemsLength": 10,
        "itemsPerPage": 5,
        "itemsPerPageOptions": [
          {
            "title": "5",
            "value": 5
          },
          {
            "title": "10",
            "value": 10
          },
          {
            "title": "25",
            "value": 25
          },
          {
            "title": "50",
            "value": 50
          },
          {
            "title": "100",
            "value": 100
          },
          {
            "title": "$vuetify.dataFooter.itemsPerPageAll",
            "value": -1
          }
        ],
        "itemsPerPageText": "$vuetify.dataFooter.itemsPerPageText",
        "lastIcon": "mdi mdi-page-last",
        "lastPageLabel": "$vuetify.dataFooter.lastPage",
        "level": 2,
        "levels": 3,
        "loaderHeight": 2,
        "loaderSize": "default",
        "loaderType": [
          "linear",
          "circular",
          "text",
          "skelton"
        ],
        "loading": false,
        "loadingText": "",
        "multiSort": false,
        "mustSort": false,
        "nextIcon": "mdi mdi-chevron-right",
        "nextPageLabel": "$vuetify.dataFooter.nextPage",
        "page": 1,
        "pageText": "$vuetify.dataFooter.pageText",
        "prevIcon": "mdi mdi-chevron-left",
        "prevPageLabel": "$vuetify.dataFooter.prevPage",
        "returnObject": false,
        "search": "",
        "searchDebounce": 750,
        "searchMaxWait": 1000,
        "searchProps": {
          "cols": {
            "lg": 3,
            "md": 6,
            "sm": 12,
            "xl": 3,
            "xs": 12,
            "xxl": 2
          },
          "density": "compact",
          "variant": "underlined"
        },
        "server": true,
        "showCurrentPage": false,
        "showExpand": false,
        "showFooterRow": false,
        "showSearch": true,
        "showSelect": false,
        "skeltonType": "heading@1",
        "sortBy": [],
        "sticky": false,
        "tag": "div"
      }
    },
    "selectable": {
      "postIds": null,
      "id": "1",
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      },
      "child": {
        "color": "primary",
        "density": "compact",
        "drilldownKey": "id",
        "elevation": 5,
        "expandOnClick": false,
        "firstIcon": "mdi mdi-page-first",
        "fixedFooter": true,
        "fixedHeader": true,
        "footers": [
          {
            "align": "start",
            "key": "userId",
            "title": "User ID",
            "width": 100
          },
          {
            "align": "start",
            "key": "id",
            "title": "Post ID",
            "width": 250
          },
          {
            "align": "start",
            "key": "title",
            "title": "Post"
          },
          {
            "key": "data-table-expand",
            "title": ""
          }
        ],
        "headers": [
          {
            "align": "start",
            "key": "userId",
            "sortable": false,
            "title": "User ID",
            "width": 110
          },
          {
            "align": "start",
            "key": "id",
            "title": "Post ID",
            "width": 260
          },
          {
            "align": "start",
            "key": "title",
            "title": "Post"
          },
          {
            "key": "data-table-expand",
            "title": ""
          }
        ],
        "height": "auto",
        "hideDrilldownWhenLoading": true,
        "itemChildrenKey": "child",
        "itemProps": [],
        "itemTitle": "title",
        "itemValue": "id",
        "items": [
          {
            "commentIds": null,
            "userId": 1,
            "id": "1",
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          },
          {
            "commentIds": null,
            "userId": 1,
            "id": "2",
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
          },
          {
            "commentIds": null,
            "userId": 1,
            "id": "3",
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
          },
          {
            "commentIds": null,
            "userId": 1,
            "id": "4",
            "title": "eum et est occaecati",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
          },
          {
            "commentIds": null,
            "userId": 1,
            "id": "5",
            "title": "nesciunt quas odio",
            "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
          }
        ],
        "itemsLength": 10,
        "itemsPerPage": 5,
        "itemsPerPageOptions": [
          {
            "title": "5",
            "value": 5
          },
          {
            "title": "10",
            "value": 10
          },
          {
            "title": "25",
            "value": 25
          },
          {
            "title": "50",
            "value": 50
          },
          {
            "title": "100",
            "value": 100
          },
          {
            "title": "$vuetify.dataFooter.itemsPerPageAll",
            "value": -1
          }
        ],
        "itemsPerPageText": "$vuetify.dataFooter.itemsPerPageText",
        "lastIcon": "mdi mdi-page-last",
        "lastPageLabel": "$vuetify.dataFooter.lastPage",
        "level": 2,
        "levels": 3,
        "loaderHeight": 2,
        "loaderSize": "default",
        "loaderType": [
          "linear",
          "circular",
          "text",
          "skelton"
        ],
        "loading": false,
        "loadingText": "",
        "multiSort": false,
        "mustSort": false,
        "nextIcon": "mdi mdi-chevron-right",
        "nextPageLabel": "$vuetify.dataFooter.nextPage",
        "page": 1,
        "pageText": "$vuetify.dataFooter.pageText",
        "prevIcon": "mdi mdi-chevron-left",
        "prevPageLabel": "$vuetify.dataFooter.prevPage",
        "returnObject": false,
        "search": "",
        "searchDebounce": 750,
        "searchMaxWait": 1000,
        "searchProps": {
          "cols": {
            "lg": 3,
            "md": 6,
            "sm": 12,
            "xl": 3,
            "xs": 12,
            "xxl": 2
          },
          "density": "compact",
          "variant": "underlined"
        },
        "server": true,
        "showCurrentPage": false,
        "showExpand": false,
        "showFooterRow": false,
        "showSearch": true,
        "showSelect": false,
        "skeltonType": "heading@1",
        "sortBy": [],
        "sticky": false,
        "tag": "div"
      }
    },
    "columns": {
      "id": "1",
      "name": "Leanne Graham",
      "email": "Sincere@april.biz"
    },
    "raw": {
      "postIds": null,
      "id": "1",
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      },
      "child": {
        "color": "primary",
        "density": "compact",
        "drilldownKey": "id",
        "elevation": 5,
        "expandOnClick": false,
        "firstIcon": "mdi mdi-page-first",
        "fixedFooter": true,
        "fixedHeader": true,
        "footers": [
          {
            "align": "start",
            "key": "userId",
            "title": "User ID",
            "width": 100
          },
          {
            "align": "start",
            "key": "id",
            "title": "Post ID",
            "width": 250
          },
          {
            "align": "start",
            "key": "title",
            "title": "Post"
          },
          {
            "key": "data-table-expand",
            "title": ""
          }
        ],
        "headers": [
          {
            "align": "start",
            "key": "userId",
            "sortable": false,
            "title": "User ID",
            "width": 110
          },
          {
            "align": "start",
            "key": "id",
            "title": "Post ID",
            "width": 260
          },
          {
            "align": "start",
            "key": "title",
            "title": "Post"
          },
          {
            "key": "data-table-expand",
            "title": ""
          }
        ],
        "height": "auto",
        "hideDrilldownWhenLoading": true,
        "itemChildrenKey": "child",
        "itemProps": [],
        "itemTitle": "title",
        "itemValue": "id",
        "items": [
          {
            "commentIds": null,
            "userId": 1,
            "id": "1",
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          },
          {
            "commentIds": null,
            "userId": 1,
            "id": "2",
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
          },
          {
            "commentIds": null,
            "userId": 1,
            "id": "3",
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
          },
          {
            "commentIds": null,
            "userId": 1,
            "id": "4",
            "title": "eum et est occaecati",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
          },
          {
            "commentIds": null,
            "userId": 1,
            "id": "5",
            "title": "nesciunt quas odio",
            "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
          }
        ],
        "itemsLength": 10,
        "itemsPerPage": 5,
        "itemsPerPageOptions": [
          {
            "title": "5",
            "value": 5
          },
          {
            "title": "10",
            "value": 10
          },
          {
            "title": "25",
            "value": 25
          },
          {
            "title": "50",
            "value": 50
          },
          {
            "title": "100",
            "value": 100
          },
          {
            "title": "$vuetify.dataFooter.itemsPerPageAll",
            "value": -1
          }
        ],
        "itemsPerPageText": "$vuetify.dataFooter.itemsPerPageText",
        "lastIcon": "mdi mdi-page-last",
        "lastPageLabel": "$vuetify.dataFooter.lastPage",
        "level": 2,
        "levels": 3,
        "loaderHeight": 2,
        "loaderSize": "default",
        "loaderType": [
          "linear",
          "circular",
          "text",
          "skelton"
        ],
        "loading": false,
        "loadingText": "",
        "multiSort": false,
        "mustSort": false,
        "nextIcon": "mdi mdi-chevron-right",
        "nextPageLabel": "$vuetify.dataFooter.nextPage",
        "page": 1,
        "pageText": "$vuetify.dataFooter.pageText",
        "prevIcon": "mdi mdi-chevron-left",
        "prevPageLabel": "$vuetify.dataFooter.prevPage",
        "returnObject": false,
        "search": "",
        "searchDebounce": 750,
        "searchMaxWait": 1000,
        "searchProps": {
          "cols": {
            "lg": 3,
            "md": 6,
            "sm": 12,
            "xl": 3,
            "xs": 12,
            "xxl": 2
          },
          "density": "compact",
          "variant": "underlined"
        },
        "server": true,
        "showCurrentPage": false,
        "showExpand": false,
        "showFooterRow": false,
        "showSearch": true,
        "showSelect": false,
        "skeltonType": "heading@1",
        "sortBy": [],
        "sticky": false,
        "tag": "div"
      }
    }
  },
  "columns": [
    {
      "align": "start",
      "key": "id",
      "title": "User ID",
      "width": 370,
      "fixedOffset": 0,
      "sortable": true
    },
    {
      "align": "start",
      "key": "name",
      "title": "Name",
      "fixedOffset": 370,
      "sortable": true
    },
    {
      "align": "start",
      "key": "email",
      "title": "Email",
      "fixedOffset": 370,
      "sortable": true
    },
    {
      "key": "data-table-expand",
      "sortable": false,
      "title": "",
      "fixedOffset": 370
    }
  ],
  "index": 0
}`;
</script>
