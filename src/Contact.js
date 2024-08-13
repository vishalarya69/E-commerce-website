import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.
   1025560258818!2d78.21662817419362!3d26.
   225857039272583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
   1!3m3!1m2!1s0x3976c15c7bf09457%3A0x4b49992c038ef8f9!2sAshok%20Colony%2C%20Morar%2C%20Gwalior%2C%20Madhya%20Pradesh%20474011!5e0!3m2!1sen!2sin!4v1708411956814!5m2!1sen!2sin" 
   width="100%" 
   height="400" 
   style={{border:0}}
   allowFullScreen=""
   loading="lazy" 
   referrerPolicy="no-referrer-when-downgrade"></iframe>   
   
     <h2 classNmae="common-heading">May I Help You</h2>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/myyrwale"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;