import { ThemeComponents } from '@chakra-ui/react'

const Input: ThemeComponents['Input'] = {
  baseStyle: {},
  variants: {
    primary: {
      field: {
        borderRadius: 'md',
        bg: 'transparent',
        borderColor: 'themeGray',
        borderWidth: 1,
        _invalid: {
          borderColor: 'red.400',
        },
        _placeholder: {
          darkGray: 'gray.300',
        },
      },
    },
  },
  defaultProps: {
    variant: 'primary',
  },
}

export default Input
