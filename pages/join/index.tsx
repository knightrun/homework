import { CreateElement, VNode } from 'vue'
import { Component, Vue } from 'nuxt-property-decorator'

import { IRadioList } from '@/typings/state'
import '~/assets/styles/join.scss'

@Component
export default class Join extends Vue {
  private userId: string = ''
  private userPassword: string = ''
  private gender: string = 'male'
  private radioList: IRadioList[] = [
    { label:'남자', value:'male' },
    { label:'여자', value:'female' },
  ]
  private agree: boolean = false

  submit(){
    return false
  }

  render(h: CreateElement): VNode {
    return (
      <section class="join">
        <h1 class="title">회원가입</h1>
        <div class="required">* 필수입력</div>
        <div class="join_form">
          <form onSubmit={ this.submit }>
            <div class="text_wrap">
              <text-input
                id="joinId"
                class="row"
                ref="joinId"
                label="아이디*"
                placeholder="아이디를 입력하세요"
                v-model={ this.userId }
              />
              <text-input
                id="joinPw"
                class="row"
                ref="joinPw"
                type="password"
                label="비밀번호*"
                placeholder="비밀번호를 입력하세요"
                v-model={ this.userPassword }
              />
            </div>

            <div class="gender_wrap">
              <span>성별</span>
              <radio-input
                  v-model={ this.gender }
                  items={ this.radioList }
                  group="gender"
                  className={{ input: 'screen-out', label: '' }}
              />
            </div>

            <div class="agree_wrap">
              <span class="agree_txt">모든 약관 내용에 동의합니다.</span>
              <checkbox-input
                  id="agree"
                  v-model={ this.agree }
                  className={{ input: 'screen-out', label: 'screen-out' }}
                  label="동의하기"
              />
            </div>
            <div class="btn-wrap">
              <button type="submit" class="btn">가입하기</button>
            </div>
          </form>
        </div>
      </section>
    )
  }
}
