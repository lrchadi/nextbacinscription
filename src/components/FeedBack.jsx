
function FeedBack() {
  return (
    <div className='feedback'>
        <h1 className="title"><span>رأيك</span> يهمنا</h1>
        <p className="subtitle">يشرفنا مشاركتك لرأيك حول الموقع وطرق تحسينه للأفضل</p>
        <div className="inputs">
            <input type="text" placeholder='الأسم...' />
            <input type="text" placeholder='البريد الألكتروني...' />
            <textarea name="message" placeholder='رسالتك...'></textarea>
        </div>
        <button type="submit" className="sendBtn">ارسال</button>
    </div>
  )
}

export default FeedBack