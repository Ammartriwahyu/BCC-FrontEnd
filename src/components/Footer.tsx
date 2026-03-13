export default function Footer() {
  return (
    <footer className="border-t mt-20">

      <div className="max-w-6xl mx-auto px-6 py-10 text-center text-sm text-gray-600">

        <p>
          © {new Date().getFullYear()} ReadWrite. All rights reserved.
        </p>

      </div>

    </footer>
  );
}