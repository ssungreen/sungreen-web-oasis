
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "견적 문의가 접수되었습니다!",
      description: "담당자가 빠른 시일 내에 연락드리겠습니다.",
    });
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">문의하기</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              태양광 설치에 대한 모든 궁금증을 해결해드립니다
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Send className="h-6 w-6 text-amber-600 mr-2" />
                  무료 견적 신청
                </CardTitle>
                <p className="text-gray-600">
                  정확한 견적을 위해 아래 정보를 입력해주세요. 전문가가 현장 방문하여 상세한 상담을 도와드립니다.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">성명 *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="홍길동"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">연락처 *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="010-1234-5678"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">이메일</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="example@email.com"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">설치 주소 *</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="서울특별시 강남구 테헤란로 123"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">상세 문의사항</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="건물 유형, 지붕 면적, 전력 사용량 등 추가 정보를 입력해주세요."
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-green-500 hover:from-amber-600 hover:to-green-600 text-white font-semibold py-3"
                  >
                    견적 신청하기
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">연락처 정보</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">본사 주소</h4>
                      <p className="text-gray-600">경기도 파주시 조리읍 뇌조로74번길 25-66</p>
                      <p className="text-gray-600 text-sm">우편번호: 10950</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">전화번호</h4>
                      <p className="text-gray-600">031-944-0912</p>
                      <p className="text-gray-600">팩스: 031-946-6335</p>
                      <p className="text-sm text-gray-500">상담시간: 평일 09:00 ~ 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">이메일</h4>
                      <p className="text-gray-600">sungreen7690@naver.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">운영시간</h4>
                      <p className="text-gray-600">평일: 09:00 ~ 18:00</p>
                      <p className="text-gray-600">토요일/일요일/공휴일: 휴무</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-r from-amber-500 to-green-500">
                <CardContent className="p-6 text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <MessageCircle className="h-8 w-8" />
                    <div>
                      <h3 className="text-xl font-bold">빠른 상담</h3>
                      <p className="text-white/90">카카오톡으로 간편하게</p>
                    </div>
                  </div>
                  <p className="mb-4 text-white/90">
                    카카오톡 채널을 통해 실시간으로 상담받으세요.
                    전문가가 즉시 답변해드립니다.
                  </p>
                  <Button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                    카카오톡 상담하기
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
            <p className="text-xl text-gray-600">고객님들이 자주 궁금해하시는 내용들을 정리했습니다</p>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Q. 태양광 설치에 얼마나 걸리나요?
                </h3>
                <p className="text-gray-600">
                  A. 일반적으로 주택용은 1-2일, 상업용은 규모에 따라 1-2주 소요됩니다.
                  정확한 일정은 현장 조사 후 안내해드립니다.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Q. 정부 보조금은 얼마나 받을 수 있나요?
                </h3>
                <p className="text-gray-600">
                  A. 지역과 설치 용량에 따라 차이가 있으며, 일반적으로 설치비의 20-40% 정도 지원받으실 수 있습니다.
                  정확한 금액은 상담 시 안내해드립니다.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Q. A/S는 어떻게 받을 수 있나요?
                </h3>
                <p className="text-gray-600">
                  A. 계약서에 명시되어있으며, 회사로 연락주시면 A/S접수해 드리겠습니다.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Q. 현장 조사는 무료인가요?
                </h3>
                <p className="text-gray-600">
                  A. 네, 현장 조사 및 견적은 무료로 제공해드립니다.
                  전문가가 직접 방문하여 최적의 설치 방안을 제안해드립니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
