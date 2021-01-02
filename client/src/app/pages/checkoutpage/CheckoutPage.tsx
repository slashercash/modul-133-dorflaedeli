import React, { useState, useEffect, useRef, ChangeEvent, FormEvent } from 'react';
import Cart from 'dorflaedeli-cart';
import Api from '../../shared/api/Api';
import ButtonLink from '../../shared/components/buttonlink/ButtonLink';
import CheckoutPageStyle from './CheckoutPageStyle';

const CheckoutPage = () => {
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const isMounted = useRef<boolean | null>(null);

  useEffect(() => {
    isMounted.current = true;
    Api.getCart().then((cart: Cart) => {
      if (isMounted.current) setTotalCartPrice(cart.totalCartPrice);
    });
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const status: number = await Api.putPurchase(firstName, lastName, email);
    if (status === 200) {
      setTotalCartPrice((await Api.getCart()).totalCartPrice);
      setFirstName('');
      setlastName('');
      setEmail('');
      alert('Vielen Dank für Ihre Bestellung!');
    } else {
      alert('Die eingegebenen Daten wurden vom Server nicht akzeptiert.');
    }
  };

  return (
    <React.Fragment>
      <CheckoutPageStyle>
        <section className="navigation">
          <h1>Bezahlen</h1>
          <ButtonLink to="/cart" buttonText={'Warenkorb: CHF ' + totalCartPrice.toFixed(2)} />
        </section>
        <form onSubmit={handleSubmit}>
          <div>
            <div>Vorname</div>
            <input
              required
              type="text"
              name="firstName"
              value={firstName}
              onChange={({ target }: ChangeEvent<HTMLInputElement>) => setFirstName(target.value)}
            />
          </div>
          <div>
            <div>Nachname</div>
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={({ target }: ChangeEvent<HTMLInputElement>) => setlastName(target.value)}
            />
          </div>
          <div>
            <div>Email-Adresse</div>
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={({ target }: ChangeEvent<HTMLInputElement>) => setEmail(target.value)}
            />
          </div>
          <div>
            <input type="submit" disabled={totalCartPrice === 0} value={'Einkauf abschliessen (CHF ' + totalCartPrice + ')'} />
          </div>
        </form>
      </CheckoutPageStyle>
    </React.Fragment>
  );
};

export default CheckoutPage;
