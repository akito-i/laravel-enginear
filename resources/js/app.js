import './bootstrap'
import Vue from 'vue'
import Articlelike from './components/Articlelike'
import ArticleTagsInput from './components/ArticleTagsInput'
import FollowButton from './components/FollowButton'

const app = new Vue({
  el: '#app',
  components: {
    Articlelike,
    ArticleTagsInput,
    FollowButton,
  }
})