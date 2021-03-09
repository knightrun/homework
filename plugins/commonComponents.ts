import { Vue } from 'nuxt-property-decorator'

// import component
import Fragment from '@/components/common/fragment'
import TextInput from '~/components/common/form/textInput'
import RadioInput from '~/components/common/form/radioInput'
import CheckBoxInput from '~/components/common/form/checkBoxInput'

Vue.component('fragment', Fragment)
Vue.component('text-input', TextInput)
Vue.component('radio-input', RadioInput)
Vue.component('checkbox-input', CheckBoxInput)
