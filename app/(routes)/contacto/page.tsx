export default function ContactPage() {
  return (
    <div>
      <h1>Contacto</h1>
      <form>
        <label>Nombre</label>
        <input type="text" name="name" required />
        <label>Email</label>
        <input type="email" name="email" required />
        <label>Mensaje</label>
        <textarea name="message" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
