const awardsData = {
  title: 'Boomwriter is an award-winning writing app committed to maintaining compliance in all areas involving school and student privacy and safety',
  titleImageUrl: 'data:image/png;base64,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',
  description: '',
  button: {
    type: 'button', // Button or Link
    text: 'Start your 30-day free trial',
    style: 'primary',
    linkUrl: ''
  },
  awards: [
    { title: 'Kids Safe Certified', imageUrl: 'https://www.kidsafeseal.com/sealimage/124387489510662211/boomwriter_large_darktm.png' },
    { title: 'American Association of School Librarians', imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAACMCAMAAACahX1hAAACnVBMVEUAAACYpbsiMWOfqsBDV4MkM2U9U384R3QPM2swPm0ILWdCWYU1RHH///8KL2g5SndJWoNZa5EiMWMJLmcNMmo5SXYtO2svPWxgb5MILWYpOGguPWwfP3MpOGgTNm0uPGtNXIUyRnU6SHUqOGk9T3sSNm05R3QmNWYTNWsuPGwXOnAgO20ySHhKWoMeQHQjQXM3Tn4lNGUWOnAtO2sRNGwlRniGmLP///8UOG7//voqOGn///8dPnL///8WOnD///////9EUn3////////+9ebr7PIjMmT///8mNWb///8dOm7///////////////////7////////////+/v7///////////////////9rdpf///8eLWH1ngACKGMlM2Z8Xjjq6/H5yXD2ow3V2OL++vX29/r7+/yMaizv8fVHU37TbUb2qBr+9+zj5ezFyti6v9BXYYn+8Nj9687O1uHl6/H6z4E2OVf4uEP3rCXjkgb96MMegrNka5L5xGXFWlb1ri7+8t+qscX73KNcdJs7SHbf4+v84rT715cjRHepM2Dr1+OirMJzepn6zHr3sznZ3uezvtCKlrJ6jq2AiKZOaZJGYY08WYeyQl35wVv4vVKecCjtmgjbjAb57ef1493M0N2tt8r84K4wT38tOmwqM12To7z85btogKP60oh3V4WXIGT4u0uCTn4bPXITN265Tl3ZdTfifSHJhxPoiAGeo7tzhaWHP3RbTEbz5+3Ynq371I01QXHJYlBtVj3mw86UnLaNNG6hJGFMRE3559jt0tblt7hLdaLpsJPHeI7Kamiu1ebaqcDUj5m5WXvWgnHywmzarV2beDTp5+Q+lsHrvKqNi6o5eae0fByWvdPOwdJSn8W+nbeydZyshj/kooKOpR1DAAAAWnRSTlMACPkPL+oldNKa+xOHkOxpNxz04cROr40n8s+mc8izt0g4YNhCp1funsOEYUY+fVkb2o994FIcGL/s4p1qEpkevlY+Mv714sm9cD8n44Z89K9ORtzQpl9ZZ1ZgqIldAAASgUlEQVRo3ryWywuVQBjFz4yOw3ANH6BeNNGroklXSi4EXYqe9CKCiOhxWkW7dq2iTdGiVrWuZZsI+ifT3u93/Rb3KjPO+eZ8Z0T8Nnt2C/xv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' },
    { title: 'Google for Education Partner', imageUrl: 'data:image/png;base64,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' },
    { title: 'The 2018 Edvocate edtech', imageUrl: 'data:image/png;base64,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' },
  ]
};

export default awardsData;