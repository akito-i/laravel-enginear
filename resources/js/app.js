import './bootstrap'
import Vue from 'vue'
import ArticleLike from 'ArticleLike'
import ArticleTagsInput from 'ArticleTagsInput'
import FollowButton from 'FollowButton'

const app = new Vue({
  el: '#app',
  components: {
    ArticleLike,
    ArticleTagsInput,
    FollowButton,
  }
})