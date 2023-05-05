export const checkTestProps = (testProps: object, componentProps: object) => Object.keys(testProps).reduce((acc, i) => acc ? !!componentProps[i as keyof typeof componentProps] : false, true)
