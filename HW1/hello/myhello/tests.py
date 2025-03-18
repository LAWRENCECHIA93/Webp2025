from django.test import TestCase

class MyhelloTests(TestCase):
    def test_example(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
