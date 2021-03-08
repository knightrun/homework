import { CreateElement, VNode } from 'vue'
import { Component, Vue } from 'nuxt-property-decorator'

import '@/assets/styles/login/index.scss'

@Component
export default class Login extends Vue {
  created() {
  }

  mounted() {
  }

  render(h: CreateElement): VNode {
    return (
        <div class="login">
          로그인
        </div>
    )
  }
}
