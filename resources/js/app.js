import './bootstrap'
import Vue from 'vue'
import ArticleTagsInput from './components/ArticleTagsInput'
import FollowButton from './components/FollowButton'

const app = new Vue({
  el: '#app',
  components: {
    ArticleTagsInput,
    FollowButton,
  }
})